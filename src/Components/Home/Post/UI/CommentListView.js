import React from "react";
import {Divider,List} from "antd";
import PropTypes from "prop-types";

CommentListView.propTypes = {
    commentList : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string.isRequired,
        content : PropTypes.string.isRequired,
        commentDate : PropTypes.string.isRequired,
    })).isRequired,
};


export default function CommentListView (props) {
    return (
        <div id="commentList">
            <Divider>Comments</Divider>
            <List
                className="comment-list"
                dataSource={props.commentList}
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