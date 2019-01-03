import React from "react";
import {Divider,List} from "antd";
import PropTypes from "prop-types";


CommentListItemUI.defaultProps = {
    id : "" ,
    commentDate : "",
    author : "",
    content : "",
};

CommentListItemUI.propTypes = {
    id : PropTypes.string.isRequired,
    commentDate : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
};


export default function CommentListItemUI (props) {
    const {id,content,author,commentDate} = props;
    return(
        <List.Item
            key={id}
            className="comment-list-item"
        >
            <div>
                <Divider orientation="left">{author}</Divider>

                <div dangerouslySetInnerHTML={{__html : content}} />

                <Divider
                    className="comment-date"
                    orientation="right"
                >
                    {commentDate}
                </Divider>
            </div>
        </List.Item>
    )
}