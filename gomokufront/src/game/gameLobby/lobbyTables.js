import React,{useState} from "react"
import {Table,Tag,Space} from "antd"

const columns = [
    {
        title: '桌号',
        dataIndex: 'tableIndex',
        key: 'tableIndex',
        width:100,
        render: text => <span>{text}</span>,
    },
    {
        title: '分制',
        dataIndex: 'score',
        key: 'score',
        width:100
    },
    {
        title: '玩家',
        key: 'players',
        dataIndex: 'players',
        width: 100,
        render: players =>
            <div>
                <div>{players[0] != null ? players[0] : "---"}</div>
                <div>{players[1] != null ? players[1] : "---"}</div>
            </div>
    },
    {
        title: 'Action',
        key: 'action',
        width:100,
        render: () => (
            <Space size="middle">
                <a>加入对局</a>
                <a>观战</a>
            </Space>
        ),
    },
];

// const data = [
//     {
//         key: '1',
//         tableIndex: '#101',
//         score: '7分',
//         players: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         tableIndex: '#102',
//         score: '3分',
//         players: ['loser'],
//     },
//     {
//         key: '3',
//         tableIndex: '#103',
//         score: '5分',
//         players: ['cool', 'teacher'],
//     },
// ];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        tableIndex: `10 ${i}`,
        score: `${i}`,
        players: ['cool', 'teacher'],
    });
}

const LobbyTables = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{y:600,x:600}}>
        </Table>
    )
}

export default LobbyTables;

