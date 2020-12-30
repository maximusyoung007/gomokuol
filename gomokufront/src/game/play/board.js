import React from "react"

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onBoard: -1,
            clickTurn: 1,
            havePut: Array(625).fill(null),
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

        let points = [
            [3,3],[3,11],[11,3],[11,11],[7,7]
        ]
        for(let i = 0;i < 5;i++) {
            let point = points[i];
            context.beginPath();
            let x = 22 + 44 * point[0];
            let y = 22 + 44 * point[1];
            let radius = 3;
            let startAngle = 0;
            let endAngle = Math.PI + (Math.PI * 2) / 2;
            let anticlockwise = true;
            context.arc(x,y,radius,startAngle,endAngle,anticlockwise);
            context.fill();
        }
    }

    moveOn(e) {
        this.setState({onBoard:1});
    }

    moveOut(e) {
        this.setState({onBoard: -1});
    }

    drawIndex(ctx,indexX,indexY,color) {
        ctx.beginPath();
        ctx.moveTo(indexX - 10, indexY - 4);
        ctx.lineTo(indexX - 4, indexY - 4);
        ctx.lineTo(indexX - 4, indexY - 10);
        ctx.strokeStyle = color;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(indexX + 4, indexY - 10);
        ctx.lineTo(indexX + 4, indexY - 4);
        ctx.lineTo(indexX + 10, indexY - 4);
        ctx.strokeStyle = color;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(indexX - 10, indexY + 4);
        ctx.lineTo(indexX - 4, indexY + 4);
        ctx.lineTo(indexX - 4, indexY + 10);
        ctx.strokeStyle = color;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(indexX + 4, indexY + 10);
        ctx.lineTo(indexX + 4, indexY + 4);
        ctx.lineTo(indexX + 10, indexY + 4);
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    whereToMove(e) {
        const havePut = this.state.havePut;
        if(this.state.onBoard == 1) {
            const c = document.getElementById("board");
            let ctx = c.getContext("2d");
            let x = e.pageX - c.getBoundingClientRect().left;
            let y = e.pageY - c.getBoundingClientRect().top;
            for (let i = 0; i < 15; i++) {
                for (let j = 0; j < 15; j++) {
                    let indexX = 22 + 44 * i;
                    let indexY = 22 + 44 * j;
                    let s = indexX + "," + indexY;
                    if (havePut.indexOf(s) == -1) {
                        if (Math.abs(x - indexX) < 22 && Math.abs(y - indexY) < 22) {
                            console.log(indexX + "---" + indexY);
                            this.drawIndex(ctx,indexX,indexY,"red");
                        } else {
                            this.drawIndex(ctx,indexX,indexY,"white");
                        }
                    }
                }
            }
        }
    }

    putOn(e) {
        if(this.state.onBoard == 1) {
            const havePut = this.state.havePut;
            const c = document.getElementById("board");
            let ctx = c.getContext("2d");
            let x = e.pageX - c.getBoundingClientRect().left;
            let y = e.pageY - c.getBoundingClientRect().top;
            for (let i = 0; i < 15; i++) {
                for (let j = 0; j < 15; j++) {
                    let indexX = 22 + 44 * i;
                    let indexY = 22 + 44 * j;
                    let s = indexX + "," + indexY;
                    if(havePut.indexOf(s) == -1) {
                        if (Math.abs(x - indexX) < 22 && Math.abs(y - indexY) < 22) {
                            ctx.beginPath();
                            let radius = 22;
                            let startAngle = 0;
                            let endAngle = Math.PI + (Math.PI * 2) / 2;
                            let anticlockwise = true;
                            ctx.arc(indexX, indexY, radius, startAngle, endAngle, anticlockwise);
                            if (this.state.clickTurn == 1) {
                                ctx.strokeStyle = "black";
                                ctx.fillStyle = "black";
                            } else {
                                ctx.strokeStyle = "black";
                                ctx.fillStyle = "white";
                            }
                            this.setState({clickTurn: this.state.clickTurn * (-1)});
                            ctx.fill();
                            ctx.stroke();
                            havePut.push(s);
                            this.setState({
                                havePut: havePut
                            })
                        }
                    }
                }
            }
        }
    }

    render() {
        return(
            <div>
                <canvas id="board"
                        onMouseOver={(event) => this.moveOn(event)}
                        onMouseOut={(event) => this.moveOut(event)}
                        onMouseMove={(event) => this.whereToMove(event)}
                        onClick={(event) => this.putOn(event)}
                        width={660}
                        height={660}></canvas>
            </div>
        )
    }
}

export default Board;
