package com.createryan.usercenter.service;

import com.createryan.usercenter.common.BaseResponse;
import com.createryan.usercenter.model.domain.User;
import com.baomidou.mybatisplus.extension.service.IService;
import com.createryan.usercenter.model.dto.UserDTO;

import javax.servlet.http.HttpServletRequest;

/**
 * 用户服务类
 *
 * @author createryan
 * @description 针对表【user(用户)】的数据库操作Service
 * @createDate 2022-08-03 17:01:58
 */
public interface UserService extends IService<User> {

    /**
     * 用户注册
     *
     * @param userAccount   用户账户
     * @param userPassword  用户密码
     * @param checkPassword 校验密码
     * @param planetCode 星球编号
     * @return 新用户id
     */
    BaseResponse<Object> userRegister(String userAccount, String userPassword, String checkPassword, String planetCode);

    /**
     * 用户登录
     *
     * @param userAccount 用户账户
     * @param userPassword 用户密码
     * @return 脱敏后的用户信息
     */
    BaseResponse<UserDTO> userLogin(String userAccount, String userPassword, HttpServletRequest request);

    /**
     * 用户脱敏
     *
     * @param originUser
     * @return
     */
    BaseResponse<UserDTO> getSafetyUser(User originUser);

    /**
     * 用户注销
     *
     * @param request
     * @return 退出成功
     */
    BaseResponse<Object> userLogout(HttpServletRequest request);
}
