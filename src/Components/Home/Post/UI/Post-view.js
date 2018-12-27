import React from "react";
import PropTypes from "prop-types";
import {Divider } from "antd";

PostView.propTypes = {
    post : PropTypes.shape({
        id : PropTypes.string.isRequired,
        userId : PropTypes.string.isRequired,
        boardId : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        content : PropTypes.string.isRequired,
        postDate : PropTypes.string.isRequired,
    }).isRequired,
};

export default function PostView (props) {
    return (
        <div className="post-value">
            <Divider orientation="left"><h1>{props.post.title}</h1></Divider>
            <p>{props.post.content}</p>
            <Divider orientation="right"><h3>Jason.but</h3></Divider>
            <p>{props.post.postDate}</p>
        </div>
    );
}