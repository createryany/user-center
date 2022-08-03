package com.createryan.usercenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户登录请求体
 *
 * @author: createryan
 * @date 2022/8/3 22:18
 */
@Data
public class UserLoginRequest implements Serializable {

    private static final long serialVersionUID = 1690509714976150991L;

    private String userAccount;

    private String userPassword;
}
