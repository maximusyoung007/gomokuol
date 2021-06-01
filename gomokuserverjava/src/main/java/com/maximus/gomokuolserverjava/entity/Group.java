package com.maximus.gomokuolserverjava.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.Version;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 群
 * </p>
 *
 * @author maximus
 * @since 2021-05-27
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Group implements Serializable {

    private static final long serialVersionUID=1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 群名称
     */
    private String groupName;


}
