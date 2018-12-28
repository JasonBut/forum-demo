import React,{Component} from "react";
import CommentListView from "../UI/CommentListView";

const commentList = [
    {
        "id": "comment_1",
        "postId" : "post_1",
        "userId" : "user_5",
        "content": "fuck you asshole",
        "commentDate": "12月26日"
    },
    {
        "id": "comment_2",
        "postId" : "post_1",
        "userId" : "user_5",
        "content": "fuck you asshole",
        "commentDate": "12月26日"
    },
    {
        "id": "comment_3",
        "postId" : "post_2",
        "userId" : "user_5",
        "content": "fuck you asshole",
        "commentDate": "12月26日"
    }
];

export default class extends Component {
    render() {
        return (
            <CommentListView commentList={commentList} />
        )
    }
}