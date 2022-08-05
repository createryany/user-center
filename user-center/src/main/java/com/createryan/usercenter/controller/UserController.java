package com.createryan.usercenter.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.createryan.usercenter.common.BaseResponse;
import com.createryan.usercenter.common.ErrorCode;
import com.createryan.usercenter.common.ResultUtils;
import com.createryan.usercenter.execption.BusinessExecption;
import com.createryan.usercenter.model.domain.User;
import com.createryan.usercenter.model.domain.request.UserLoginRequest;
import com.createryan.usercenter.model.domain.request.UserRegisterRequest;
import com.createryan.usercenter.model.dto.UserDTO;
import com.createryan.usercenter.service.UserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import java.util.List;
import java.util.stream.Collectors;

import static com.createryan.usercenter.constant.UserConstants.ADMIN_ROLE;
import static com.createryan.usercenter.constant.UserConstants.USER_LOGIN_STATUS;

/**
 * 用户接口
 *
 * @author: createryan
 * @date 2022/8/3 21:52
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserService userService;

    @PostMapping("/register")
    public BaseResponse<Object> userRegister(@RequestBody UserRegisterRequest userRegisterRequest) {
        if (userRegisterRequest == null) {
            throw new BusinessExecption(ErrorCode.NULL_ERROR);
        }
        String userAccount = userRegisterRequest.getUserAccount();
        String userPassword = userRegisterRequest.getUserPassword();
        String checkPassword = userRegisterRequest.getCheckPassword();
        String planetCode = userRegisterRequest.getPlanetCode();
        if (StringUtils.isAnyBlank(userAccount, userPassword, checkPassword)) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR);
        }
        return userService.userRegister( userAccount, userPassword, checkPassword, planetCode);
    }

    @PostMapping("/login")
    public BaseResponse<UserDTO> userLogin(@RequestBody UserLoginRequest userLoginRequest,
                                           HttpServletRequest request) {
        if (userLoginRequest == null) {
            throw new BusinessExecption(ErrorCode.NULL_ERROR);
        }
        String userAccount = userLoginRequest.getUserAccount();
        String userPassword = userLoginRequest.getUserPassword();
        if (StringUtils.isAnyBlank(userAccount, userPassword)) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR);
        }
        return userService.userLogin(userAccount, userPassword, request);
    }

    @PostMapping("/logout")
    public BaseResponse<Object> userLogout(HttpServletRequest request) {
        if (request == null) {
            throw new BusinessExecption(ErrorCode.NULL_ERROR);
        }
        return userService.userLogout(request);
    }

    @GetMapping("/current")
    public BaseResponse<UserDTO> getCurrentUser(HttpServletRequest request) {
        UserDTO userDTO = (UserDTO) request.getSession().getAttribute(USER_LOGIN_STATUS);
        if (userDTO == null) {
            throw new BusinessExecption(ErrorCode.NO_LOGIN);
        }
        Long userId = userDTO.getId();
        User user = userService.getById(userId);
        return userService.getSafetyUser(user);
    }

    @GetMapping("/search")
    public BaseResponse<List<Object>> searchUsers(String username, HttpServletRequest request) {
        checkAdmin(request);
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNoneBlank(username)) {
            queryWrapper.like("username", username);
        }
        List<User> userList = userService.list(queryWrapper);
        List<Object> safatyUser = userList.stream().map(user -> userService.getSafetyUser(user).getData()).collect(Collectors.toList());
        return ResultUtils.success(safatyUser);
    }

    @PostMapping("/delete")
    public BaseResponse<Object> deleteUser(@RequestBody long id, HttpServletRequest request) {
        BaseResponse baseResponse = checkAdmin(request);
        if (baseResponse.getCode() != 0) {
            return ResultUtils.error(40101, "没有操作权限！", "");
        }
        if (id <= 0) {
            throw new BusinessExecption(ErrorCode.PARAMS_ERROR);
        }
        // removeById 逻辑删除
        return ResultUtils.success("删除成功");
    }

    /**
     * 鉴权是否为管理员
     *
     * @param request
     * @return
     */
    private BaseResponse checkAdmin(HttpServletRequest request) {
        // 鉴权仅管理员可查询
        UserDTO user = (UserDTO) request.getSession().getAttribute(USER_LOGIN_STATUS);
        if (user == null) {
            throw new BusinessExecption(ErrorCode.NULL_ERROR);
        }
        if (user.getUserRole() != ADMIN_ROLE) {
            throw new BusinessExecption(ErrorCode.NO_AUTH);
        }
        return ResultUtils.success();
    }
}
