import React from "react";
import "./post.less";
import Post from "./Containers/Post";
import CommentList from "./Containers/CommentList";

export default function () {
    return (
        <div id="post">
            <Post />
            <CommentList />
        </div>
    )
}