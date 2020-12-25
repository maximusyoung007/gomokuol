import React from "react";
import {Button,Space} from "antd";
import LobbyTables from "./lobbyTables";
import LobbyPLayersList from "./lobbyPlayersList";

const GameLobby = () => {
    return (
        <div  >
            <Space style={{paddingTop: "20px"}}>
                <Button type="primary">新游戏桌</Button>
                <Button type="primary">随机匹配</Button>
            </Space>
            <div style={{paddingTop: "10px",display:"inline"}}>
                <LobbyTables></LobbyTables>
                <LobbyPLayersList></LobbyPLayersList>
            </div>
        </div>
    )
}

export default GameLobby
