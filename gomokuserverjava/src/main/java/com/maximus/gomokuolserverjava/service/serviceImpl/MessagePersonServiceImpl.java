package com.maximus.gomokuolserverjava.service.serviceImpl;

import com.maximus.gomokuolserverjava.entity.MessagePerson;
import com.maximus.gomokuolserverjava.mapper.MessagePersonMapper;
import com.maximus.gomokuolserverjava.service.MessagePersonService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author maximus
 * @since 2021-08-09
 */
@Service
public class MessagePersonServiceImpl extends ServiceImpl<MessagePersonMapper, MessagePerson> implements MessagePersonService {

}
