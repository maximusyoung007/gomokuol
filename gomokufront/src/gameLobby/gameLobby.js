import React from 'react';
import {useLocation} from "react-router";

const GameLobby= () => {
    let location = useLocation();
    let id = location.state.username;
    return(
        <div>
            这是游戏页面
        </div>
    )
}

export default GameLobby;
