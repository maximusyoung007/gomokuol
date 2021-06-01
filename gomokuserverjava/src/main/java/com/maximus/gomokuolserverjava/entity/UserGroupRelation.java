package com.maximus.gomokuolserverjava.entity;

import com.baomidou.mybatisplus.annotation.Version;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 用户和所属群的关系
 * </p>
 *
 * @author maximus
 * @since 2021-05-27
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class UserGroupRelation implements Serializable {

    private static final long serialVersionUID=1L;

    private Integer id;

    @TableField("userId")
    private String userId;

    @TableField("groupId")
    private String groupId;


}
