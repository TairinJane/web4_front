import React from "react";
import {addPoint} from "../../actions/actions";
import connect from "react-redux/es/connect/connect";

class PointCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0};
        this.canvas = null;

        this.setCanvasRef = element => {
            this.canvas = element;
        };
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.canvas.getContext('2d');
        this.drawPlot(ctx);
        this.props.points.map((point) => {
            this.drawPoint(ctx, point);
            return true;
        })
    }

    drawPlot(ctx) {
        let canvasCenter = this.canvas.width / 2;
        let r = canvasCenter / 2;

        //back
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 500, 500);

        ctx.strokeStyle = "lightskyblue";
        ctx.fillStyle = "lightskyblue";
        //circle
        ctx.beginPath();
        ctx.arc(canvasCenter, canvasCenter, r, 3 * Math.PI / 2, Math.PI * 2);
        ctx.lineTo(canvasCenter, canvasCenter);
        ctx.fill();

        //rect
        ctx.fillRect(r, canvasCenter, r, r);

        //triangle
        ctx.beginPath();
        ctx.moveTo(canvasCenter, canvasCenter);
        ctx.lineTo(canvasCenter + r, canvasCenter);
        ctx.lineTo(canvasCenter, canvasCenter + r / 2);
        ctx.fill();

        // axis
        ctx.beginPath();
        ctx.moveTo(canvasCenter, 0);
        ctx.lineTo(canvasCenter, this.canvas.height);
        ctx.moveTo(0, canvasCenter);
        ctx.lineTo(this.canvas.width, canvasCenter);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        //R rects
        ctx.fillStyle = "black";
        ctx.fillRect(r - 1, canvasCenter - 3, 2, 6);
        ctx.fillRect(canvasCenter + r - 1, canvasCenter - 3, 2, 6);
        ctx.fillRect(canvasCenter - 3, r - 1, 6, 2);
        ctx.fillRect(canvasCenter - 3, canvasCenter + r - 1, 6, 2);

        //R/2 rects
        ctx.fillRect(r + r / 2 - 1, canvasCenter - 3, 2, 6);
        ctx.fillRect(canvasCenter + r / 2 - 1, canvasCenter - 3, 2, 6);
        ctx.fillRect(canvasCenter - 3, r + r / 2 - 1, 6, 2);
        ctx.fillRect(canvasCenter - 3, canvasCenter + r / 2 - 1, 6, 2);


        //text
        ctx.font = "14px Arial";
        ctx.fillText("R", r - 5, canvasCenter + 15);
        ctx.fillText("R", canvasCenter + r - 5, canvasCenter + 15);
        ctx.fillText("R", canvasCenter + 5, r);
        ctx.fillText("R", canvasCenter + 5, canvasCenter + r + 5);
    }

    canvasClick = (event) => {
        let canvasCenter = this.canvas.width / 2;
        let {x, y} = this.getCursorPosition(event);
        x -= canvasCenter;
        y -= canvasCenter;
        y = -y;
        x = x / (canvasCenter / 2) * this.props.r;
        y = y / (canvasCenter / 2) * this.props.r;
        this.props.addPoint(x, y, this.props.r, '' + this.checkArea(x, y, this.props.r))
    };

    drawPoint = (ctx, point) => {
        if (+point.r === +this.props.r) {
            if (point.result === 'true') {
                ctx.fillStyle = "darkgreen";
            } else {
                ctx.fillStyle = "red";
            }
        } else {
            ctx.fillStyle = "grey";
        }
        let canvasCenter = this.canvas.width / 2;
        let x = canvasCenter + point.x / point.r * (canvasCenter / 2);
        let y = canvasCenter - point.y / point.r * (canvasCenter / 2);
        ctx.fillRect(x - 2.5, y - 2.5, 5, 5);

    };

    getCursorPosition = (e) => {
        const rect = this.canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        return {x, y};
    };

    checkArea = (x, y, r) => {
        return ((x <= 0 && y <= 0 && x >= -r && y >= -r) ||
            (x >= 0 && y >= 0 && (x ** 2 + y ** 2 <= r ** 2)) ||
            (x >= 0 && y <= 0 && y >= (x / 2 - r / 2)));
    };

    render() {
        return (
            <canvas ref={this.setCanvasRef}
                    width={500} height={500} onClick={this.canvasClick}/>
        );
    }
}

const mapStateToProps = state => ({
    points: state.point.points,
    r: state.point.r
});

const mapDispatchToProps = dispatch => ({
    addPoint: (x, y, r, res) => {
        dispatch(addPoint(x, y, r, res));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PointCanvas);
