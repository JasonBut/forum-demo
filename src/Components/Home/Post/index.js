import React from "react";
import "./post.less";
import Post from "./Containers/Post";
import CommentList from "./Containers/CommentListHOC";
import {Editor,PostButton} from "../../Commons";

const editable = true;

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