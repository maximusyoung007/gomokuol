package com.maximus.gomokuolserverjava.controller;

import com.alibaba.fastjson.JSONObject;
import com.maximus.gomokuolserverjava.entity.User;
import com.maximus.gomokuolserverjava.result.Result;
import com.maximus.gomokuolserverjava.service.UserService;
import com.maximus.gomokuolserverjava.util.JwtUtil;
import com.maximus.gomokuolserverjava.util.ShiroUtil;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class LoginController {
    @Resource
    private UserService userService;

    /**
     * 登录
     * @param user
     * @return
     */
    @PostMapping("login")
    @ResponseBody
    public Result login(@RequestBody User user) {
        User user1 = userService.findByUsername(user);
        String salt = user.getSalt();
        String encodePassword = ShiroUtil.encryptPassword(user.getPassword(), salt);
        if (null == user1) {
            return Result.error("没有此账号");
        }
        else if (!encodePassword.equals(user1.getPassword())) {
            return Result.error("账号或者密码错误");
        }
        JSONObject json = new JSONObject();
        json.put("access_token", JwtUtil.createToken(user1.getName(), user1.getId().toString()));
        //将所有已登录的用户存在list里，list放在session里
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest().getSession();
        if (session.getAttribute("userList") != null) {
            List<String> userList = (List<String>) session.getAttribute("userList");
            userList.add(user.getName());
            session.setAttribute("userList", userList);
        } else {
            List<String> userList = Arrays.asList(user.getName());
            session.setAttribute("userList", userList);
        }
        return Result.success(json, "登录成功");
    }
}
