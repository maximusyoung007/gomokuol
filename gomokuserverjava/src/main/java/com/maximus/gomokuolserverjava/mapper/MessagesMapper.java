package com.maximus.gomokuolserverjava.mapper;

import com.maximus.gomokuolserverjava.entity.Messages;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author maximus
 * @since 2021-08-09
 */
public interface MessagesMapper extends BaseMapper<Messages> {
    List<Messages> getMessages(Messages messages);

    int addAndGetKey(Messages messages);
}
