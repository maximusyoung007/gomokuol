package com.maximus.gomokuolserverjava.service.serviceImpl;

import com.maximus.gomokuolserverjava.entity.Relations;
import com.maximus.gomokuolserverjava.mapper.RelationsMapper;
import com.maximus.gomokuolserverjava.service.RelationsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 用户关系表 服务实现类
 * </p>
 *
 * @author maximus
 * @since 2021-05-26
 */
@Service
public class RelationsServiceImpl extends ServiceImpl<RelationsMapper, Relations> implements RelationsService {

}
