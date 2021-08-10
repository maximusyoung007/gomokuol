package com.maximus.gomokuolserverjava.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.Version;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author maximus
 * @since 2021-08-09
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class MessagePerson implements Serializable {

    private static final long serialVersionUID=1L;

    /**
     * id
     */
      @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 登录者
     */
    private String fromPerson;

    /**
     * 消息人
     */
    private String toPerson;


}
