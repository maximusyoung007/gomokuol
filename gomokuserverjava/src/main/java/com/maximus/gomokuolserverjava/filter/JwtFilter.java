package com.maximus.gomokuolserverjava.filter;

import com.maximus.gomokuolserverjava.entity.JwtToken;
import org.apache.shiro.web.filter.authc.BasicHttpAuthenticationFilter;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class JwtFilter extends BasicHttpAuthenticationFilter {
    private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);
    /**
     * 判断请求头中是否有token,如果没有token，表示当前是登录
     * @param request
     * @return
     */
    @Override
    protected boolean isLoginAttempt(ServletRequest request, ServletResponse response) {
        HttpServletRequest request1 = (HttpServletRequest) request;
        return request1.getHeader("token") == null;
    }

    /**
     * 非法请求将跳转到 "/unauthorized/**"
     */
    private void responseError(ServletResponse response, String message) {
        try {
            HttpServletResponse response1 = (HttpServletResponse) response;
            message = URLEncoder.encode(message, "UTF-8");
            response1.sendRedirect("/unauthorized/" + message);
        } catch (UnsupportedEncodingException e) {
            logger.error("Error!" + e.getMessage());
        } catch (IOException e) {
            logger.error("Error!" + e.getMessage());
        }
    }

    /**
     * 若请求头中含有token，对token进行检查
     */
    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object mappedValue) {
        if (isLoginAttempt(request, response)) {
            try {
                executeLogin(request, response);
            } catch (Exception e) {
                logger.error("Error", e.getMessage());
                responseError(response, e.getMessage());
            }
        }
        //不存在token可能是游客，直接放行
        return true;
    }

    /**
     * 从请求中获取token
     * @param request
     * @return
     */
    private String getTokenFromRequest(ServletRequest request) {
        return ((HttpServletRequest) request).getHeader("token");
    }

    /**
     * 执行登录检查
     */
    protected boolean executeLogin(ServletRequest request, ServletResponse response) {
        String token = getTokenFromRequest(request);
        JwtToken jwtToken = new JwtToken(token);
        try {
            getSubject(request, response).login(jwtToken);
            return true;
        } catch (Exception e) {
            logger.error("login failed", e.getMessage());
            return false;
        }
    }

}
