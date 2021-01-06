import React,{useState} from "react"
import {Card,Button,Avatar} from "antd";

const {Meta} = Card
const PlayInfo = () => {
    const tabList = [
        {
            key:"chat",
            tab:"聊天"
        },
        {
            key:"history",
            tab:"历史"
        },
        {
            key:"player",
            tab:"玩家"
        }
    ]
    const contentList = {
        chat:
            <div className={"playInfo"}>
            <p>聊天</p>
            <Button className={"playInfoButton"} size={"small"} type="primary">发送</Button>
            </div>,
        history:
            <div className={"playInfo"}>
            <p>history</p>
            <Button className={"playInfoButton"} size={"small"} type="primary">保存</Button>
            </div>,
        player: <textarea className={"playInfo"}>玩家</textarea>
    }


    const [infoKey,setInfoKey] = useState("history");

    const onTabChange = (key) => {
        setInfoKey(key);
    };

    return(
        <div>
            <Card
                style={{ width: 280 ,marginTop:"16px"}}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
                <div>积分</div>
                <div>倒计时：</div>
            </Card>
            <Card
                style={{ width: 280}}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
                <div>积分</div>
                <div>倒计时：</div>
            </Card>
            <Card
                style={{ width: 280 }}
                tabList={tabList}
                activeTabKey={infoKey}
                onTabChange={key => {
                    onTabChange(key);
                }}
            >
                {contentList[infoKey]}
            </Card>
        </div>
    )
}

export default PlayInfo;
