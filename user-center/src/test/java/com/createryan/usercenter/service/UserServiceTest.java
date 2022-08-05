package com.createryan.usercenter.service;

import com.createryan.usercenter.model.domain.User;
import com.createryan.usercenter.utils.Result;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

/**
 * 用户服务测试
 *
 * @author createryan
 */
@SpringBootTest
class UserServiceTest {

    @Resource
    private UserService userService;

    @Test
    void testAddUser() {
        User user = new User();
        user.setUsername("createryan");
        user.setUserAccount("yany");
        user.setAvatarUrl("http://www.creatercc.com:3090//img/avatorImages/165855874573000.jpg");
        user.setGender(0);
        user.setUserPassword("12345678");
        user.setPhone("123");
        user.setEmail("456");

        boolean result = userService.save(user);
        System.out.println("id = " + user.getId());
        assertTrue(result);
    }

    @Test
    void userRegister() {
        /*String userAccount = "yanh";
        String userPassword = "";
        String checkPassword = "123456";
        String planetCode = "10945";
        Result result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertFalse(result.getStatus());
        userAccount = "yy";
        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertFalse(result.getStatus());
        userAccount = "yanh";
        userPassword = "123456";
        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertFalse(result.getStatus());
        userAccount = "yan h";
        userPassword = "12345678";
        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertFalse(result.getStatus());
        checkPassword = "123456789";
        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertFalse(result.getStatus());
        userAccount = "yany";
        checkPassword = "12345678";
        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertFalse(result.getStatus());
        userAccount = "yanh";
        result = userService.userRegister(userAccount, userPassword, checkPassword, planetCode);
        Assertions.assertTrue(result.getStatus());*/
    }
}