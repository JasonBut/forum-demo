import React from "react";
import "./post.less";
import PostArea from "./Containers/PostArea";
import CommentList from "./Containers/CommentList";
import {Editor,PostButton} from "../../Commons";


export default () => (
    <>
        <PostButton />
        <div id="post">
            <PostArea />
            <CommentList />
            <Editor mode="comment"  />
        </div>
    </>
)