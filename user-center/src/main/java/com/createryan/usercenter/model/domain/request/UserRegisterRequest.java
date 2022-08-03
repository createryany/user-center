package com.createryan.usercenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户注册请求体
 *
 * @author: createryan
 * @date 2022/8/3 22:02
 */
@Data
public class UserRegisterRequest implements Serializable {

    private static final long serialVersionUID = 6621887570344055469L;

    private String userAccount;

    private String userPassword;

    private String checkPassword;
}
