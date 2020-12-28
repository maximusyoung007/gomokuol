import React,{useState} from "react"

class Board extends React.Component {
    componentDidMount() {
        this.initCanvas();
    }

    initCanvas() {
        const c = document.getElementById("board");
        const context = c.getContext("2d");
        context.strokeStyle = "#bfbfbf";

        for(var i = 0;i < 15;i++) {
            // context.moveTo(15,15 + 30 * i);
            // context.lineTo(435,15 + 30 * i);
            // context.stroke();
            //
            // context.moveTo(15 + 30 * i,15);           //竖线
            // context.lineTo(15 + 30 * i,435);
            // context.stroke();
        }
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <canvas id="board" width={690} height={690}></canvas>
            </div>
        )
    }
}

export default Board;
