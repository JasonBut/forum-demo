import React from "react";
import PropTypes from "prop-types";
import {Divider } from "antd";

PostUI.defaultProps = {
    title : "",
    content : "",
    postDate : "",
    author : "",
};

PostUI.propTypes = {
    title : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    postDate : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
};

export default function PostUI (props) {
    const {title,content,author,postDate} = props;
    return (
        <div key="Post" className="post-value animated fadeInUp slow">
            <Divider orientation="left"><h1>{title}</h1></Divider>
            <div>{content}</div>
            <Divider orientation="right"><h3>{author}</h3></Divider>
            <p>{postDate}</p>
        </div>
    );
}