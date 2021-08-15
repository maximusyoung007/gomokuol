package com.maximus.gomokuolserverjava.controller;


import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.maximus.gomokuolserverjava.entity.MessagePerson;
import com.maximus.gomokuolserverjava.entity.Messages;
import com.maximus.gomokuolserverjava.result.Result;
import com.maximus.gomokuolserverjava.service.MessagePersonService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author maximus
 * @since 2021-08-09
 */
@Controller
@RequestMapping("/game/messagePerson")
public class MessagePersonController {
    @Resource
    private MessagePersonService messagePersonService;

    @PostMapping("getMessagePerson")
    @ResponseBody
    public JSONObject getMessagePerson(@RequestBody MessagePerson person) {
        JSONObject outJson = new JSONObject();
        QueryWrapper wrapper = new QueryWrapper();
        wrapper.eq("from_person", person.getFromPerson());
        List<MessagePerson> messagePeople = messagePersonService.list(wrapper);
        List<JSONObject> peopleJson = new ArrayList<>();
        for (MessagePerson person1 : messagePeople) {
            JSONObject json = new JSONObject();
            json.put("key", person1.getId());
            json.put("title", person1.getToPerson());
            json.put("path", "/game/message/messageInfo/" + person1.getToPerson());
            peopleJson.add(json);
        }
        outJson.put("data", peopleJson);
        return outJson;
    }
}

