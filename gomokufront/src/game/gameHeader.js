import React,{useState} from "react";
import {Menu} from "antd";
import { HomeOutlined, TeamOutlined, CommentOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const GameHeader = () => {
    const [current,setCurrent] = useState("lobby");

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    let location = useLocation();
    let state = location.state;
    let username = state.username;
    console.log("username" + username);

    const aboutMe = {
        pathname: '/game/aboutMe',
        state: { username: username }
    }

    const message = {
        pathname: '/game/message',
        state: { username: username }
    }

    const friends = {
        pathname: '/game/friends',
        state: { username: username }
    }

    const lobby = {
        pathname: '/game/lobby',
        state: { username: username }
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <span id={"title"}>gomoku online</span>
            <Menu.Item className={"menuItem"} key="aboutMe" icon={<UserOutlined />}>
                <Link to={aboutMe}>关于我</Link>
            </Menu.Item>
            <Menu.Item className={"menuItem"} key="message" icon={<CommentOutlined />}>
                <Link to={message}>消息</Link>
            </Menu.Item>
            <Menu.Item className={"menuItem"} key="friends"  icon={<TeamOutlined />}>
                <Link to={friends}>好友</Link>
            </Menu.Item>
            <Menu.Item className={"menuItem"} key="lobby" icon={<HomeOutlined />}>
                <Link to={lobby}>大厅</Link>
            </Menu.Item>
        </Menu>
    );
}

export default GameHeader;
