import React from "react"
import {useLocation} from "react-router";

const Play = () => {
    let location = useLocation();
    let state = location.state;
    console.log(state);
    return(
        <div>
            这里是棋盘
        </div>
    )
}

export default Play;
