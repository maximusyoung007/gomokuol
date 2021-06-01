package com.maximus.gomokuolserverjava.controller;

import com.maximus.gomokuolserverjava.result.Result;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/guest")
public class GuestController {
    @GetMapping("enter")
    public Result enter() {
        return Result.success("欢迎进入游客页面");
    }
}
