import React from "react";
import {Button,Space,Row,Col} from "antd";
import LobbyTables from "./lobbyTables";
import LobbyPLayersList from "./lobbyPlayersList";

const GameLobby = () => {
    return (
        <div  style={{marginTop: '10px'}}>
            <Space style={{paddingTop: "10px"}}>
                <Button type="primary">新游戏桌</Button>
                <Button type="primary">随机匹配</Button>
            </Space>
            <div style={{paddingTop: "10px"}}>
                <Row>
                    <Col span={16}>
                        <LobbyTables></LobbyTables>
                    </Col>
                    <Col span={8}>
                        <LobbyPLayersList></LobbyPLayersList>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default GameLobby
