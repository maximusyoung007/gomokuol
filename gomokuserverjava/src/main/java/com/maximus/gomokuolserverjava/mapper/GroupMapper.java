package com.maximus.gomokuolserverjava.mapper;

import com.maximus.gomokuolserverjava.dto.UserDto;
import com.maximus.gomokuolserverjava.entity.Group;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 群 Mapper 接口
 * </p>
 *
 * @author maximus
 * @since 2021-05-27
 */
public interface GroupMapper extends BaseMapper<Group> {
    List<Group> getGroupInfoByUser(UserDto userDto);
}
