import React from "react";
import "./post.less";
import Post from "./Containers/Post";
import {Lazy} from "../../../Utils"

const PostButton = Lazy(() => import("../../Commons/PostButton"));
const Editor = Lazy(() => import("../../Commons/Editor"));
const CommentList = Lazy(() => import("./Containers/CommentList"));

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