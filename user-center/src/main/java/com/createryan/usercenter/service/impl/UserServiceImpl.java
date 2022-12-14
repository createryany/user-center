package com.createryan.usercenter.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.createryan.usercenter.common.BaseResponse;
import com.createryan.usercenter.common.ErrorCode;
import com.createryan.usercenter.common.ResultUtils;
import com.createryan.usercenter.execption.BusinessExecption;
import com.createryan.usercenter.model.domain.User;
import com.createryan.usercenter.model.dto.UserDTO;
import com.createryan.usercenter.service.UserService;
import com.createryan.usercenter.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.createryan.usercenter.constant.UserConstants.SALT;
import static com.createryan.usercenter.constant.UserConstants.USER_LOGIN_STATUS;

/**
 * 用户服务实现类
* @author createryan
* @description 针对表【user(用户)】的数据库操作Service实现
* @createDate 2022-08-03 17:01:58
*/
@Service
@Slf4j
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
    implements UserService{

    @Resource
    private UserMapper userMapper;

    @Override
    public BaseResponse<Object> userRegister(String userAccount, String userPassword, String checkPassword, String planetCode) {
        // 1.校验
        if (StringUtils.isAnyBlank(userAccount, userPassword, checkPassword, planetCode)) {
            throw new BusinessExecption(ErrorCode.NULL_ERROR);
        }
        if (userAccount.length() < 4) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "账号长度过短");
        }
        if (userPassword.length() < 8 || checkPassword.length() < 8) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "密码长度过短");
        }
        if (planetCode.length() > 5) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "星球编号过长");
        }
        // 账户名不能包含特殊字符
        String validPattern = ".*[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！ @#￥%……&*()——+|{}【】‘；：”“’。，、？\\\\]+.*";
        Matcher matcher = Pattern.compile(validPattern).matcher(userAccount);
        if (matcher.find()) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "账号含有非法字符");
        }
        // 原密码和校验密码相同
        if (!userPassword.equals(checkPassword)) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "两次输入的密码不一致");
        }
        // 账户不能重复
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_account", userAccount);
        long count = userMapper.selectCount(queryWrapper);
        if (count > 0) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "该账号已存在");
        }
        // 星球编号不能重复
        queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("planet_code", planetCode);
        count = userMapper.selectCount(queryWrapper);
        if (count > 0) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "该编号已注册");
        }
        // 2.加密
        String encryptPassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
        // 3.插入数据
        User user = new User();
        user.setUserAccount(userAccount);
        user.setUserPassword(encryptPassword);
        user.setPlanetCode(planetCode);
        boolean saveResult = this.save(user);
        if (!saveResult) {
            throw new BusinessExecption(ErrorCode.SYSTEM_ERROR);
        }
        return ResultUtils.success(user.getId());
    }

    @Override
    public BaseResponse<UserDTO> userLogin(String userAccount, String userPassword, HttpServletRequest request) {
        // 1.校验
        if (StringUtils.isAnyBlank(userAccount, userPassword)) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "账号和密码不能为空");
        }
        if (userAccount.length() < 4) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "账号长度过短");
        }
        if (userPassword.length() < 8) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "密码长度过短");
        }
        // 账户名不能包含特殊字符
        String validPattern = ".*[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*()——+|{}【】‘；：”“’。，、？\\\\]+.*";
        Matcher matcher = Pattern.compile(validPattern).matcher(userAccount);
        if (matcher.find()) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "账号含有非法字符");
        }
        // 2.加密
        String encryptPassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
        // 查询用户是否存在
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_account", userAccount);
        queryWrapper.eq("user_password", encryptPassword);
        User user = userMapper.selectOne(queryWrapper);
        // 用户不存在
        if (user == null) {
            log.info("user login faild, userAccount cannot match userPassword");
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR, "账号和密码不匹配");
        }
        // 3.用户脱敏
        UserDTO safetyUser = getSafetyUser(user).getData();
        // 4.记录用户登录态
        request.getSession().setAttribute(USER_LOGIN_STATUS, safetyUser);
        return ResultUtils.success(safetyUser);
    }


    @Override
    public BaseResponse<UserDTO> getSafetyUser(User originUser) {
        if (originUser == null) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR);
        }
        UserDTO safetyUser = new UserDTO();
        safetyUser.setId(originUser.getId());
        safetyUser.setUsername(originUser.getUsername());
        safetyUser.setUserAccount(originUser.getUserAccount());
        safetyUser.setAvatarUrl(originUser.getAvatarUrl());
        safetyUser.setGender(originUser.getGender());
        safetyUser.setPhone(originUser.getPhone());
        safetyUser.setEmail(originUser.getEmail());
        safetyUser.setUserStatus(originUser.getUserStatus());
        safetyUser.setCreateTime(originUser.getCreateTime());
        safetyUser.setUserRole(originUser.getUserRole());
        safetyUser.setPlanetCode(originUser.getPlanetCode());
        return ResultUtils.success(safetyUser);
    }

    /**
     * 用户注销
     *
     * @param request
     * @return 退出成功
     */
    @Override
    public BaseResponse userLogout(HttpServletRequest request) {
        request.getSession().removeAttribute(USER_LOGIN_STATUS);
        return ResultUtils.success();
    }
}




