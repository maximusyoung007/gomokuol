package com.maximus.gomokuolserverjava.mapper;

import com.maximus.gomokuolserverjava.dto.UserDto;
import com.maximus.gomokuolserverjava.entity.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author maximus
 * @since 2021-02-21
 */
@Mapper
public interface UserMapper extends BaseMapper<User> {
    List<User> getFriendsList(UserDto dto);
}
