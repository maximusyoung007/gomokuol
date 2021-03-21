package com.maximus.gomokuolserverjava.realm;

import com.maximus.gomokuolserverjava.entity.JwtToken;
import com.maximus.gomokuolserverjava.entity.User;
import com.maximus.gomokuolserverjava.service.UserService;
import com.maximus.gomokuolserverjava.util.JwtUtil;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Resource;

public class JwtRealm extends AuthorizingRealm {
    private static final Logger logger = LoggerFactory.getLogger(JwtRealm.class);
    @Resource
    private UserService userService;

    @Override
    public boolean supports(AuthenticationToken token) {
        return token instanceof JwtToken;
    }


    /**
     * 授权
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        logger.info("用户授权中");
        String userName = JwtUtil.getUsernameFromToken(principalCollection.toString());
        User user0 = new User();
        user0.setName(userName);
        User user = userService.findByUsername(user0);
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        info.addStringPermission(user.getPerms());
        info.addRole(user.getRoles());
        return info;
    }

    /**
     * 认证
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        logger.info("身份认证");
        String token = (String) authenticationToken.getCredentials();
        String username = JwtUtil.getUsernameFromToken(token);
        User user0 = new User();
        user0.setName(username);
        User user = userService.findByUsername(user0);
        if (StringUtils.isEmpty(username) || !JwtUtil.verify(token, username)) {
            logger.error("token 认证失败");
            throw new AuthenticationException("token 认证失败");
        }
        if (user == null) {
            logger.info("账号或密码错误");
        }
        logger.info("用户认证成果");
        return new SimpleAuthenticationInfo(token, token, getName());
    }
}
