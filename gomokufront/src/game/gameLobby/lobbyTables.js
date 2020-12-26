import React,{useState} from "react"
import {Table,Tag,Space} from "antd"
import {useHistory, useLocation} from "react-router";
import {Link} from "react-router-dom";
import {Button} from "antd";

const data = [];
for (let i = 0; i < 20; i++) {
    data.push({
        key: i,
        tableIndex: `10 ${i}`,
        score: `${i}`,
        players: ['cool', 'teacher'],
    });
}

const LobbyTables = () => {
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
            width:50
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
            render: () => {
                return(
                    <Space size="middle">
                        <Button>
                            <Link to={play}>加入对局</Link>
                        </Button>
                        <Button>
                            <Link to={play2}>观战</Link>
                        </Button>
                    </Space>
                )
            }
        },
    ];
    let location = useLocation();
    let username = location.state.username;
    const play = {
        pathname:"/game/play",
        state: {
            purpose:1,
            username:username
        }
    }

    const play2 = {
        pathname: "/game/play",
        state: {
            purpose:2,
            username:username
        }
    }

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{y:550}}>
            size={"middle"}
        </Table>
    )
}

export default LobbyTables;

