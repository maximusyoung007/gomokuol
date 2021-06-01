package com.maximus.gomokuolserverjava.service.serviceImpl;

import com.maximus.gomokuolserverjava.dto.UserDto;
import com.maximus.gomokuolserverjava.entity.Group;
import com.maximus.gomokuolserverjava.mapper.GroupMapper;
import com.maximus.gomokuolserverjava.service.GroupService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.maximus.gomokuolserverjava.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 * 群 服务实现类
 * </p>
 *
 * @author maximus
 * @since 2021-05-27
 */
@Service
public class GroupServiceImpl extends ServiceImpl<GroupMapper, Group> implements GroupService {
    @Resource
    private GroupMapper groupMapper;

    public List<Group> getGroupInfoByUser(UserDto userDto) {
        return groupMapper.getGroupInfoByUser(userDto);
    }
}
