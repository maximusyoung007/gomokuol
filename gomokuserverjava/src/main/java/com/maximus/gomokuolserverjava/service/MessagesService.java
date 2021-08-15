package com.maximus.gomokuolserverjava.service;

import com.maximus.gomokuolserverjava.entity.Messages;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author maximus
 * @since 2021-08-09
 */
public interface MessagesService extends IService<Messages> {
    List<Messages> getMessages(Messages messages);

    int addAndGetKey(Messages messages);
}
