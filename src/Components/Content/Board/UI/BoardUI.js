import React from "react";
import PropTypes from "prop-types";
import {Card} from "antd";
import {Link} from "react-router-dom";

BoardUI.propTypes = {
    list : PropTypes.arrayOf(PropTypes.shape(
        {
            id : PropTypes.string,
            boardName : PropTypes.string,
            boardDesc : PropTypes.string,
        }
    )).isRequired,
};


export default function BoardUI (props) {
    return (
        <div id="board" key="Board" className="animated fadeIn">
            <div>
                {
                    props.list.map((item) => {
                        const boardId = item.id.split("_")[1];
                        return(
                            <Card key={item.id}
                                  className="board-card"
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
        </div>
    )
}