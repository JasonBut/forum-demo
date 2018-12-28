import React from "react";
import "./post.less";
import Post from "./Containers/Post";
import CommentList from "./Containers/CommentList";
import {PostButton,Editor} from "../../Commons/"

const editable = false;

export default function () {
    return (
        <>
            <PostButton />
            <div id="post">
                { editable ? <Post /> : <Editor mode="post" /> }
                <CommentList />
                <Editor mode="comment" />
            </div>
        </>
    )
}