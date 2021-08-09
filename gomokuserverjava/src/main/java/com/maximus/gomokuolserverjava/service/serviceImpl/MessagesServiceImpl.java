package com.maximus.gomokuolserverjava.service.serviceImpl;

import com.maximus.gomokuolserverjava.entity.Messages;
import com.maximus.gomokuolserverjava.mapper.MessagesMapper;
import com.maximus.gomokuolserverjava.service.MessagesService;
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
public class MessagesServiceImpl extends ServiceImpl<MessagesMapper, Messages> implements MessagesService {

}
