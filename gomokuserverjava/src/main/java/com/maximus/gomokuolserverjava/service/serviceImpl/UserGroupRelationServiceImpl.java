package com.maximus.gomokuolserverjava.service.serviceImpl;

import com.maximus.gomokuolserverjava.entity.UserGroupRelation;
import com.maximus.gomokuolserverjava.mapper.UserGroupRelationMapper;
import com.maximus.gomokuolserverjava.service.UserGroupRelationService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 用户和所属群的关系 服务实现类
 * </p>
 *
 * @author maximus
 * @since 2021-05-27
 */
@Service
public class UserGroupRelationServiceImpl extends ServiceImpl<UserGroupRelationMapper, UserGroupRelation> implements UserGroupRelationService {

}
