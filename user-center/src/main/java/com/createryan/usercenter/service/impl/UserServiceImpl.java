package com.createryan.usercenter.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.createryan.usercenter.model.domain.User;
import com.createryan.usercenter.service.UserService;
import com.createryan.usercenter.mapper.UserMapper;
import org.springframework.stereotype.Service;

/**
* @author creater
* @description 针对表【user(用户)】的数据库操作Service实现
* @createDate 2022-08-03 17:01:58
*/
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
    implements UserService{

}




