import React from "react";
import "./postlist.less"
import {Lazy} from "../../../Utils"

const PostList = Lazy(() => import("./Containers/PostList"));

export default function (props) {
    return (
        <PostList {...props} />
    )
}