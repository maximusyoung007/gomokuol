import React from "react";
import {Menu} from "antd";
import { HomeOutlined, TeamOutlined, CommentOutlined, UserOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

class GameHeader extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <span id={"title"}>gomoku online</span>
                <Menu.Item className={"menuItem"} key="aboutMe" icon={<UserOutlined />}>
                    关于我
                </Menu.Item>
                <Menu.Item className={"menuItem"} key="message" icon={<CommentOutlined />}>
                    消息
                </Menu.Item>
                <Menu.Item className={"menuItem"} key="app"  icon={<TeamOutlined />}>
                    好友
                </Menu.Item>
                <Menu.Item className={"menuItem"} key="lobby" icon={<HomeOutlined />}>
                    大厅
                </Menu.Item>
            </Menu>
        );
    }
}

export default GameHeader;
