package com.maximus.gomokuolserverjava.service.serviceImpl;

import com.baomidou.mybatisplus.extension.service.IService;
import com.maximus.gomokuolserverjava.entity.User;
import com.maximus.gomokuolserverjava.mapper.UserMapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author maximus
 * @since 2021-02-21
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IService<User> {

}
