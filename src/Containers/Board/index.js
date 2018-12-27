import React,{Component} from "react";
import "./board.less";
import {Card} from "antd";
import {Link} from "react-router-dom";



let board = [
    {
        id: "board_1",
        boardName: "JavaScript",
        boardDesc: "Test"
    },
    {
        id: "board_2",
        boardName: "React",
        boardDesc: "Test"
    }
];


export default class extends Component {
    render() {
        return (
            <div id={"board"}>
                {
                    board.map((item,index) => {
                        return(
                            <Card key={item.id}
                                  className={"board-card"}
                                  title={item.boardName}
                                  hoverable={true}
                                  extra={<Link to={`/board/${index}`}>More</Link>}
                            >

                                <h4>{item.boardDesc}</h4>

                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}