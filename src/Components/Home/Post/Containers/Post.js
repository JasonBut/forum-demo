import React,{Component} from "react";
import PostView from "../UI/Post-view";

const post = {
        userId: "user_1",
        boardId: "board_1",
        id: "posts_1",
        title: "Post 1",
        postDate: "12月26日",
        content: "asdiashkdjklasjdkljaskl"
};

export default class extends Component {
    render() {
        return (
            <PostView post={post} />
        );
    }
}