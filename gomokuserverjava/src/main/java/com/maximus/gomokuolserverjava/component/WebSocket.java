package com.maximus.gomokuolserverjava.component;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * messageType
 * 1、上线
 * 2、下线
 * 3、在线名单
 * 4、普通消息
 */
@Component
@ServerEndpoint("/websocket/{username}")
public class WebSocket {
    private static final Logger log = LoggerFactory.getLogger(WebSocket.class);
    /**
     * 在线人数
     */
    public static int onlineNumber = 0;

    /**
     * 以用户姓名为key，将websocket对象保存起来
     */
    private static Map<String, WebSocket> clients = new ConcurrentHashMap<String, WebSocket>();

    /**
     * 用户名
     */
    private String username;

    /**
     * 会话
     */
    private Session session;

    /**
     * 建立连接
     * 有浏览器连接过来的时候被调用
     */
    @OnOpen
    public void onOpen(@PathParam("username") String username, Session session) {
        onlineNumber++;
        log.info("客户端id为：" + session.getId() + "用户名：" + username);
        this.username = username;
        this.session = session;
        log.info("有新连接加入，当前人数" + onlineNumber);
        Map<String, Object> map1 = new HashMap<>();
        map1.put("messageType", 1);
        map1.put("username", username);
        //通知所有人我上线了
        sendMessageAll(JSON.toJSONString(map1), username);
        clients.put(username, this);
    }

    /**
     * 有错误发生
     * @param session
     * @param error
     */
    @OnError
    public void onError(Session session, Throwable error) {
        log.error(error.getMessage());
    }

    @OnClose
    public void onClose() {
        onlineNumber--;
        clients.remove(username);
        Map<String, Object> map1 = new HashMap<>();
        map1.put("messageType", 2);
        map1.put("onlineUsers", clients.keySet());
        map1.put("username", username);
        sendMessageAll(JSON.toJSONString(map1), username);
        log.info("有连接关闭！当前在线人数" + onlineNumber);
    }

    /**
     * 收到客户端的消息
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        log.info("来自客户端的消息" + message + "客户端id是" + session.getId());
        JSONObject jsonObject = JSON.parseObject(message);
        String textMessage = jsonObject.getString("message");
        String fromUsername = jsonObject.getString("username");
        String toUsername = jsonObject.getString("to");
        Map<String, Object> map1 = new HashMap<>();
        map1.put("messageType", 4);
        map1.put("textMessage", textMessage);
        map1.put("fromUsername", fromUsername);
        if (toUsername.equals("all")) {
            map1.put("toUsername", "所有人");
            sendMessageAll(JSON.toJSONString(map1), fromUsername);
        } else {
            map1.put("toUsername", toUsername);
            sendMessageTo(JSON.toJSONString(map1), toUsername);
        }
    }



    /**
     * 找到接受人并发送信息
     * @param message
     * @param toUsername
     */
    public void sendMessageTo(String message, String toUsername) {
        for (WebSocket item : clients.values()) {
            if (item.username.equals(toUsername)) {
                item.session.getAsyncRemote().sendText(message);
                break;
            }
        }
    }

    public void sendMessageAll(String message, String fromUsername) {
        for (WebSocket item : clients.values()) {
            item.session.getAsyncRemote().sendText(message);
        }
    }

    public static synchronized int getOnlineNumber() {
        return onlineNumber;
    }
}
