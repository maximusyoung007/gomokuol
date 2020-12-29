import React,{useState} from "react"

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onBoard: -1
        }
    }

    componentDidMount() {
        this.initCanvas();
    }

    initCanvas() {
        const c = document.getElementById("board");
        const context = c.getContext("2d");
        context.strokeStyle = "#bfbfbf";

        for(let i = 0;i < 15;i++) {
            context.moveTo(22,22 + 44 * i);
            context.lineTo(638,22 + 44 * i);
            context.stroke();

            context.moveTo(22 + 44 * i,22);           //竖线
            context.lineTo(22 + 44 * i,638);
            context.stroke();
        }

        for(let i = 0;i < 15;i++) {
            for(let j = 0;j < 15;j++) {

            }
        }
    }

    toMove(e) {
        this.onBoard = 1;
    }

    moveOut(e) {
        this.onBoard = -1;
    }

    whereToMove(e) {
        const c = document.getElementById("board");
        var x = e.pageX - c.getBoundingClientRect().left;
        var y = e.pageY - c.getBoundingClientRect().top;
    }



    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <canvas id="board"
                        onMouseOver={this.toMove}
                        onMouseDown={this.moveOut}
                        onMouseMove={this.whereToMove}
                        width={660}
                        height={660}></canvas>
            </div>
        )
    }
}

export default Board;
