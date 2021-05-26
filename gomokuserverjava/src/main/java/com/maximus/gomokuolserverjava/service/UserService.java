package com.maximus.gomokuolserverjava.service;

import com.maximus.gomokuolserverjava.dto.UserDto;
import com.maximus.gomokuolserverjava.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author maximus
 * @since 2021-02-21
 */
public interface UserService extends IService<User> {
    User findByUsername(User user);

    List<User> getFriendsList(UserDto userDto);
}
