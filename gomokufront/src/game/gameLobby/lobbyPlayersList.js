import React,{useState} from "react"
import {Table,Avatar} from "antd"
import { UserOutlined } from '@ant-design/icons';

const columns = [
    {
        title: '玩家',
        dataIndex: 'player',
        key: 'player',
        render: text =>
            <div>
                <Avatar size="small" style={{backgroundColor:'#87d068'}} icon={<UserOutlined />}/>
                <span>{text}</span>
            </div>
    },
    {
        title: '积分',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render: state =>
            <span>
                {state}
            </span>
    },
];

const data = [
    {
        key: '1',
        player: 'maximus',
        score: '1500',
        state: '在线',
    },
    {
        key: '2',
        player: 'david',
        score: '1500',
        state: '在线',
    },
    {
        key: '3',
        player: 'dan',
        score: '1500',
        state: '在线',
    },
];

const LobbyPlayersList = (props) => {
    const height = props.height;
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size={"small"}
            showHeader={false}
            title={() => '在线玩家'}
            scroll={{y:height}}
        ></Table>
    )
}

export default LobbyPlayersList;

