import React from "react";
import PropTypes from "prop-types";
import {Card} from "antd";
import {Link} from "react-router-dom";

export default function BoardView (props) {
    return (
        <div id="board">
            {
                props.boards.map((item) => {
                    const boardId = item.id.split("_")[1];
                    return(
                        <Card key={item.id}
                              className={"board-card"}
                              title={item.boardName}
                              hoverable={true}
                              extra={<Link to={`/board/${boardId}`}>More</Link>}
                        >

                            <h4>{item.boardDesc}</h4>

                        </Card>
                    )
                })
            }
        </div>
    )
}

BoardView.propTypes = {
    boards : PropTypes.arrayOf(PropTypes.shape(
        {
            id : PropTypes.string.isRequired,
            boardName : PropTypes.string.isRequired,
            boardDesc : PropTypes.string.isRequired,
        }
    )).isRequired,
};