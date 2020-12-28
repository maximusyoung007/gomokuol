import React,{useState} from "react"
import {Card,Skeleton,Switch,Avatar} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

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
        chat: <p>聊天</p>,
        history: <p>历史</p>,
        player: <p>玩家</p>
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
                style={{ width: '100%' }}
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
