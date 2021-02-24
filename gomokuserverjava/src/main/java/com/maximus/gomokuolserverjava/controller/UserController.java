package com.maximus.gomokuolserverjava.controller;


import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.maximus.gomokuolserverjava.dto.UserDto;
import com.maximus.gomokuolserverjava.entity.User;
import com.maximus.gomokuolserverjava.result.Result;
import com.maximus.gomokuolserverjava.service.UserService;
import com.maximus.gomokuolserverjava.util.ShiroUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;

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
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Resource
    private UserService userService;

    /**
     * 登录
     * @param user
     * @return
     */
    @PostMapping("login")
    @ResponseBody
    public JSONObject login(@RequestBody User user) {
        JSONObject outJson = new JSONObject();
        List<User> userList = userService.list();
        User user1 = userList.get(0);
        outJson.put("user", user1);
        outJson.put("code", 200);
        return outJson;
    }

    /**
     * 验证用户名是否合法
     * @param userDto
     * @return
     */
    @PostMapping("findOne")
    @ResponseBody
    public Result findOne(@RequestBody UserDto userDto) {
        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("name", user.getName());
        wrapper.last("limit 1");
        User user1 = userService.getOne(wrapper);
        if (user1 != null) {
            logger.error("该用户名已经被使用，请使用其他用户名");
            return Result.error("该用户名已经被使用，请使用其他用户名");
        }
        return Result.success("用户名合法");
    }

    /**
     * 注册
     * @param userDto
     * @return
     */
    @PostMapping("register")
    @ResponseBody
    public Result register(@RequestBody UserDto userDto) {
        if(!userDto.getPassword().equals(userDto.getRePassword())) {
            logger.error("两次输入的密码不一致");
            return Result.error("两次输入的密码不一致");
        }
        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        String salt = ShiroUtil.createSalt();
        String encodePassword = ShiroUtil.encryptPassword(userDto.getPassword(), salt);
        user.setPassword(encodePassword);
        user.setScore(1500);
        user.setSalt(salt);
        user.setIsLogin(0);
        if(userService.save(user)) {
            logger.info("注册成功");
            return Result.success("注册成功");
        }
        return Result.error("注册失败");
    }
}

