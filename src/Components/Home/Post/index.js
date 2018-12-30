import React from "react";
import "./post.less";
import Post from "./Containers/Post";
import CommentList from "./Containers/CommentList";
import {Editor,PostButton} from "../../Commons";

const editable = true;

export default () => (
    <>
        <PostButton />
        <div id="post">
            { editable ? <Post /> : <Editor mode="post" /> }
            <CommentList />
            <Editor mode="comment" />
        </div>
    </>
)