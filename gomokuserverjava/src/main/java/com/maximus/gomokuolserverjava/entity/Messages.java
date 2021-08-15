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
public class Messages implements Serializable {

    private static final long serialVersionUID=1L;

    /**
     * id
     */
      @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 联系人1
     */
    private String fromPerson;

    /**
     * 联系人2
     */
    private String toPerson;

    /**
     * 消息
     */
    private String message;


}
