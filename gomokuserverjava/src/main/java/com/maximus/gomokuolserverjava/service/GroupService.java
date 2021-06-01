package com.maximus.gomokuolserverjava.service;

import com.maximus.gomokuolserverjava.dto.UserDto;
import com.maximus.gomokuolserverjava.entity.Group;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 群 服务类
 * </p>
 *
 * @author maximus
 * @since 2021-05-27
 */
public interface GroupService extends IService<Group> {
    List<Group> getGroupInfoByUser(UserDto userDto);
}
