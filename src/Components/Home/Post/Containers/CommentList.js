import React,{Component} from "react";
import {List,Divider} from "antd";

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
            <div id="commentList">
                <Divider>Comments</Divider>
                <List
                    className="comment-list"
                    dataSource={commentList}
                    bordered
                    renderItem={(item) => {
                        return(
                            <List.Item
                                key={item.id}
                                className="comment-list-item"
                            >
                                <div>
                                    <Divider orientation="left">Jack</Divider>

                                    <p>{item.content}</p>

                                    <Divider
                                        className="comment-date"
                                        orientation="right"
                                    >
                                        {item.commentDate}
                                    </Divider>

                                </div>
                            </List.Item>
                        )
                    }}
                />
            </div>
        )
    }
}