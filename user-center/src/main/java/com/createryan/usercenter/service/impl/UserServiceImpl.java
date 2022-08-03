package com.createryan.usercenter.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.createryan.usercenter.model.domain.User;
import com.createryan.usercenter.model.dto.UserDTO;
import com.createryan.usercenter.service.UserService;
import com.createryan.usercenter.mapper.UserMapper;
import com.createryan.usercenter.utils.Result;
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
    public Result userRegister(String userAccount, String userPassword, String checkPassword) {
        // 1.校验
        if (StringUtils.isAnyBlank(userAccount, userPassword, checkPassword)) {
            return Result.fail("");
        }
        if (userAccount.length() < 4) {
            return Result.fail("");
        }
        if (userPassword.length() < 8 || checkPassword.length() < 8) {
            return Result.fail("");
        }
        // 账户名不能包含特殊字符
        String validPattern = ".*[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*()——+|{}【】‘；：”“’。，、？\\\\]+.*";
        Matcher matcher = Pattern.compile(validPattern).matcher(userAccount);
        if (matcher.find()) {
            return Result.fail("");
        }
        // 原密码和校验密码相同
        if (!userPassword.equals(checkPassword)) {
            return Result.fail("");
        }
        // 账户不能重复
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_account", userAccount);
        long count = userMapper.selectCount(queryWrapper);
        if (count > 0) {
            return Result.fail("");
        }
        // 2.加密
        String encryptPassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
        // 3.插入数据
        User user = new User();
        user.setUserAccount(userAccount);
        user.setUserPassword(encryptPassword);
        boolean saveResult = this.save(user);
        if (!saveResult) {
            return Result.fail("");
        }
        return Result.ok(user.getId());
    }

    @Override
    public Result userLogin(String userAccount, String userPassword, HttpServletRequest request) {
        // 1.校验
        if (StringUtils.isAnyBlank(userAccount, userPassword)) {
            return Result.fail("用户名或密码不能为空");
        }
        if (userAccount.length() < 4) {
            return Result.fail("用户名格式不正确！");
        }
        if (userPassword.length() < 8) {
            return Result.fail("密码格式不正确！");
        }
        // 账户名不能包含特殊字符
        String validPattern = ".*[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*()——+|{}【】‘；：”“’。，、？\\\\]+.*";
        Matcher matcher = Pattern.compile(validPattern).matcher(userAccount);
        if (matcher.find()) {
            return Result.fail("用户名格式不正确！");
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
            return Result.fail("用户名和密码不匹配！");
        }
        // 3.用户脱敏
        UserDTO safetyUser = (UserDTO) getSafetyUser(user).getData();
        // 4.记录用户登录态
        request.getSession().setAttribute(USER_LOGIN_STATUS, safetyUser);
        return Result.ok(safetyUser);
    }


    @Override
    public Result getSafetyUser(User originUser) {
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
        return Result.ok(safetyUser);
    }
}




