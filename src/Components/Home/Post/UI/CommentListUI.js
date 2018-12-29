import React from "react";
import {Divider,List} from "antd";
import PropTypes from "prop-types";

CommentListUI.defaultProps = {
    list : [
        {
            id : "",
            content : "",
            commentDate : "",
        }
    ]
};

CommentListUI.propTypes = {
    list : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string,
        content : PropTypes.string,
        commentDate : PropTypes.string,
    })).isRequired,
};

export default function CommentListUI (props) {
    return (
        <div id="commentList">
            <Divider>Comments</Divider>
            <List
                className="comment-list"
                dataSource={props.list}
                bordered
                renderItem={(item) => {
                    return(
                        <List.Item
                            key={item.id}
                            className="comment-list-item"
                        >
                            <div>
                                <Divider orientation="left">Jack</Divider>

                                <p>{item.content}</p>

                                <Divider
                                    className="comment-date"
                                    orientation="right"
                                >
                                    {item.commentDate}
                                </Divider>
                            </div>
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}