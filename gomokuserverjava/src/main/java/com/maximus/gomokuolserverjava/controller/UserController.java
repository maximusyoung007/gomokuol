package com.maximus.gomokuolserverjava.controller;


import com.alibaba.fastjson.JSONObject;
import com.maximus.gomokuolserverjava.entity.User;
import com.maximus.gomokuolserverjava.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author maximus
 * @since 2021-02-21
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("login")
    public JSONObject login(@RequestBody User user) {
        JSONObject outJson = new JSONObject();
        List<User> userList = userService.list();
        User user1 = userList.get(0);
        outJson.put("user", user1);
        outJson.put("code", 200);
        return outJson;
    }
}

