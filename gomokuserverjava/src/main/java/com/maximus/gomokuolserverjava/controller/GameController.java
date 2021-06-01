package com.maximus.gomokuolserverjava.controller;

import com.alibaba.fastjson.JSONObject;
import com.maximus.gomokuolserverjava.dto.UserDto;
import com.maximus.gomokuolserverjava.entity.Group;
import com.maximus.gomokuolserverjava.entity.User;
import com.maximus.gomokuolserverjava.result.Result;
import com.maximus.gomokuolserverjava.service.GroupService;
import com.maximus.gomokuolserverjava.service.UserService;
import com.maximus.gomokuolserverjava.util.JwtUtil;
import org.apache.shiro.realm.CachingRealm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class GameController {
    @Resource
    private UserService userService;

    @Resource
    private GroupService groupService;

    @RequestMapping("/game/user/getFriendList")
    @ResponseBody
    public List<JSONObject> getFriendList(HttpServletRequest request) {
        String token = request.getHeader("token");
        UserDto userDto = new UserDto();
        userDto.setId(Integer.parseInt(JwtUtil.getUserIdFromToken(token)));
        List<User> friendsList = userService.getFriendsList(userDto);
        List<Group> groupList = groupService.getGroupInfoByUser(userDto);
        JSONObject outJson = new JSONObject();
        List<JSONObject> groupJson = new ArrayList<>();
        List<JSONObject> friendJson = new ArrayList<>();
        for (User user : friendsList) {
            JSONObject fj = new JSONObject();
            fj.put("title", user.getName());
            fj.put("pathname", "/game/friends/friendInfo");
            friendJson.add(fj);
        }
        for (Group group : groupList) {
            JSONObject gj = new JSONObject();
            gj.put("title", group.getGroupName());
            gj.put("pathname", "/game/friends/groupInfo");
            groupJson.add(gj);
        }

        JSONObject subJson1 = new JSONObject();
        JSONObject subJson2 = new JSONObject();
        subJson1.put("title", "群聊");
        subJson1.put("pathname", "");
        subJson1.put("children", groupJson);
        subJson2.put("title", "好友");
        subJson2.put("pathname", "");
        subJson2.put("children", friendJson);
        List<JSONObject> list = new ArrayList<>();
        list.add(subJson1);
        list.add(subJson2);
        return list;
    }
}
