import React,{Component} from "react";
import PostListItem from "./PostListItem";
import {Editor,PostButton} from "../../../Commons/"


const postList = [
    {
        "userId": "user_1",
        "boardId": "board_1",
        "id": "posts_1",
        "title": "Post 1",
        "postDate": "12月26日",
        "content": "Post 1 test"
    },
    {
        "userId": "user_1",
        "boardId": "board_1",
        "id": "posts_2",
        "title": "Post 2",
        "postDate": "12月26日",
        "content": "Post 2 Test"
    },
    {
        "userId": "user_2",
        "boardId": "board_2",
        "id": "posts_3",
        "title": "post 3",
        "postDate": "12月26日",
        "content": "Post 3 tEST"
    }
];

export default class extends Component {

    constructor (props) {
        super (props);
        this.state = {
            editable : false
        }
    }

    publish = () => {
        const editable = !this.state.editable;
        this.setState({
            editable : editable,
        })
    }

    render() {
        return (
            <>
                <PostButton onClick={this.publish} />
                {this.state.editable ? <Editor /> : null}
                <PostListItem postList={postList} />
            </>

        );
    }
}