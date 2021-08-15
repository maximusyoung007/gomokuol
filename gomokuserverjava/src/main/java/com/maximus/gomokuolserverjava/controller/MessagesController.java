package com.maximus.gomokuolserverjava.controller;


import com.alibaba.fastjson.JSONObject;
import com.maximus.gomokuolserverjava.entity.MessagePerson;
import com.maximus.gomokuolserverjava.entity.Messages;
import com.maximus.gomokuolserverjava.result.Result;
import com.maximus.gomokuolserverjava.service.MessagesService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;
import sun.plugin2.message.Message;

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
@RequestMapping("/game/messages")
public class MessagesController {
    @Resource
    private MessagesService messageService;

    @PostMapping("getMessages")
    @ResponseBody
    public JSONObject getMessage(@RequestBody Messages messages) {
        JSONObject outJson = new JSONObject();
        List<Messages> messagesList = messageService.getMessages(messages);
        List<JSONObject> jsonList = new ArrayList<>();
        for (Messages messages1 : messagesList) {
            JSONObject tempJson = new JSONObject();
            tempJson.put("key", messages1.getId());
            tempJson.put("title", messages1.getFromPerson());
            tempJson.put("chatContent", messages1.getMessage());
            jsonList.add(tempJson);
        }
        outJson.put("messages", jsonList);
        return outJson;
    }

    @PostMapping("addMessage")
    @ResponseBody
    public Result addMessage(@RequestBody Messages messages) {
        int count = messageService.addAndGetKey(messages);
        List<JSONObject> jsonList = new ArrayList() {{
            JSONObject tempJson = new JSONObject();
            tempJson.put("key", messages.getId());
            tempJson.put("title", messages.getFromPerson());
            tempJson.put("chatContent", messages.getMessage());
            add(tempJson);
        }};
        if (count > 0) {
            return Result.success(jsonList,"成功");
        }
        return Result.error("失败");
    }
}

