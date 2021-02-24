package com.maximus.gomokuolserverjava.dto;

import lombok.Data;

@Data
public class UserDto {
    private Integer id;

    private String name;

    private Integer score;

    private String password;

    private String rePassword;

    private String mobile;

    private String salt;

    private Integer isLogin;

    private String email;
}
