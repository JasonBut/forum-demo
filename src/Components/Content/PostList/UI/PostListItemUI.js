import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {List} from "antd";

PostListItemUI.defaultProps = {
    id : "" ,
    title : "",
    postDate : "",
    postId : "",
    author : "",
};

PostListItemUI.propTypes = {
    id : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    postDate : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
    postId : PropTypes.string.isRequired,
};


export default function PostListItemUI (props) {
    const {id,postId,title,author,postDate} = props;
    return (
        id &&
        <List.Item
            key={id}
            className="post-list-item animated fadeIn slow"
        >
            <h3><Link to={`/post/${postId}`}>{title}</Link></h3>
            <div>
                <p>作者</p>
                <p>{author}</p>
            </div>
            <div>
                <p>发布时间</p>
                <p>{postDate}</p>
            </div>
        </List.Item>
    )
}