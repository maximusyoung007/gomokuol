import React, {useRef, useEffect, useState} from "react";
import { Button, Space, Row, Col } from "antd";
import LobbyTables from "./lobbyTables";
import LobbyPLayersList from "./lobbyPlayersList";

require("../game.css")

const GameLobby = () => {
  const[height, setHeight] = useState(50);

  //页面加载完成后获取高度，根据获取到的高度重新渲染表格
  useEffect(() => {
    // let ttt = document.getElementById("ttt");
    // let h = ttt.clientHeight;
    // setHeight(h);
    // window.addEventListener("resize", () => {
    //   let ttt = document.getElementById("ttt");
    //   let h = ttt.clientHeight;
    //   setHeight(h);
    // });
  },[])

  return (
    <div className={"game-lobby"} style={{marginTop: '10px'}} id={"ttt"}>
      <div>
        <Space>
            <Button type="primary">新游戏桌</Button>
            <Button type="primary">随机匹配</Button>
        </Space>
      </div>
      <div>
        <div style={{paddingTop: "10px",backgroundColor: "white"}}>
            <Row>
                <Col span={16}>
                    <LobbyTables height={height}></LobbyTables>
                </Col>
                <Col span={8}>
                    <LobbyPLayersList height={height}></LobbyPLayersList>
                </Col>
            </Row>
        </div>
      </div>
    </div>
  )
}

export default GameLobby
