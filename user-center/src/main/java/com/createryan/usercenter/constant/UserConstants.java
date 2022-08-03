package com.createryan.usercenter.constant;

/**
 * 用户常量
 *
 * @author: createryan
 * @date 2022/8/3 23:50
 */

public interface UserConstants {

    /**
     * 盐值：混淆密码
     */
    String SALT = "Creater";

    /**
     * 用户登录态键
     */
    String USER_LOGIN_STATUS = "userLoginStatus";

    // ----------- 权限 -----------------

    /**
     * 默认权限
     */
    int DEFAULT_ROLE = 0;

    /**
     * 管理员权限
     */
    int ADMIN_ROLE = 1;
}
