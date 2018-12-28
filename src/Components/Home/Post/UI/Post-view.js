import React from "react";
import PropTypes from "prop-types";
import {Divider } from "antd";

PostView.propTypes = {
    post : PropTypes.shape({
        id : PropTypes.string,
        userId : PropTypes.string,
        boardId : PropTypes.string,
        title : PropTypes.string,
        content : PropTypes.string,
        postDate : PropTypes.string,
    }).isRequired,
};

PostView.defaultProps = {
    post : {
        id : "",
        userId : "",
        boardId : "",
        title : "",
        content : "",
        postDate : "",
    }
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