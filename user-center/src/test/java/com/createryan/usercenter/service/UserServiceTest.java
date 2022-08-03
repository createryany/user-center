package com.createryan.usercenter.service;

import com.createryan.usercenter.model.domain.User;
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
        user.setUserPassword("helloworld!");
        user.setPhone("123");
        user.setEmail("456");

        boolean result = userService.save(user);
        System.out.println("id = " + user.getId());
        assertTrue(result);
    }
}