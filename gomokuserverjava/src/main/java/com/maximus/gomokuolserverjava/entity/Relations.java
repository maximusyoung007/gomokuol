package com.maximus.gomokuolserverjava.entity;

import com.baomidou.mybatisplus.annotation.Version;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 用户关系表
 * </p>
 *
 * @author maximus
 * @since 2021-05-26
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Relations implements Serializable {

    private static final long serialVersionUID=1L;

    /**
     * id
     */
      private Integer id;

    /**
     * 用户1
     */
    @TableField("userId1")
    private String userId1;

    /**
     * 用户2
     */
    @TableField("userId2")
    private String userId2;

    /**
     * 用户关系（1、好友）
     */
    private Integer relation;


}
