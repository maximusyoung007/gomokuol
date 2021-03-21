package com.maximus.gomokuolserverjava.entity;

import org.apache.shiro.authc.AuthenticationToken;

/**
 * 在Realm认证方法中，对token进行认证
 */
public class JwtToken implements AuthenticationToken {
    private String token;

    public JwtToken(String token) {
        this.token = token;
    }


    @Override
    public Object getPrincipal() {
        return token;
    }

    @Override
    public Object getCredentials() {
        return token;
    }
}
