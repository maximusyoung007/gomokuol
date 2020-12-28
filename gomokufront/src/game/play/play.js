import React from "react"
import {useLocation} from "react-router";
import Board from "./board";
import {Row,Col} from "antd";
import PlayInfo from "./playInfo";

const Play = () => {
    let location = useLocation();
    let state = location.state;



    return(
        <div>
            <Row>
                <Col span={17}>
                    <Board></Board>
                </Col>
                <Col span={7}>
                    <PlayInfo></PlayInfo>
                </Col>
            </Row>
        </div>
    )
}

export default Play;
