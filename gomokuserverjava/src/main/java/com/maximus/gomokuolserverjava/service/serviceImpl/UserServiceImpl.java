package com.maximus.gomokuolserverjava.service.serviceImpl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.maximus.gomokuolserverjava.dto.UserDto;
import com.maximus.gomokuolserverjava.entity.User;
import com.maximus.gomokuolserverjava.mapper.UserMapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maximus.gomokuolserverjava.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author maximus
 * @since 2021-02-21
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public User findByUsername(User user) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("name", user.getName());
        return userMapper.selectOne(queryWrapper);
    }

    @Override
    public List<User> getFriendsList(UserDto userDto) {
        return userMapper.getFriendsList(userDto);
    }
}
