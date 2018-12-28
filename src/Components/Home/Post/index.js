import React from "react";
import "./post.less";
import Post from "./Containers/Post";
import {Lazy} from "../../../Utils"

const PostButton = Lazy(() => import("../../Commons/PostButton"));
const Editor = Lazy(() => import("../../Commons/Editor"));
const CommentList = Lazy(() => import("./Containers/CommentList"));

const editable = true;

export default function (props) {
    return (
        <>
            <PostButton />
            <div id="post">
                { editable ? <Post {...props} /> : <Editor mode="post" /> }
                <CommentList {...props} />
                <Editor mode="comment" />
            </div>
        </>
    )
}