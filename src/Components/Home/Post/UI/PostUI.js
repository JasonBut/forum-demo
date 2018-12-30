import React from "react";
import PropTypes from "prop-types";
import {Divider } from "antd";

PostUI.propTypes = {
    title : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    postDate : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
};

PostUI.defaultProps = {
    title : "",
    content : "",
    postDate : "",
    author : "",
};

export default function PostUI (props) {
    const {title,content,author,postDate} = props;
    return (
        <div className="post-value">
            <Divider orientation="left"><h1>{title}</h1></Divider>
            <p>{content}</p>
            <Divider orientation="right"><h3>{author}</h3></Divider>
            <p>{postDate}</p>
        </div>
    );
}