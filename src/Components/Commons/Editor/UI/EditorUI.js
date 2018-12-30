import React from "react";
import {Input,Form} from "antd";

export default function EditorUI (props) {
    const {post,title,comment,handleChange,isPosting} = props;
    return (
        <Form className="editor">
            {isPosting ?
                <Form.Item>
                    <Input
                        name="postTitle"
                        type="text"
                        value={title}
                        onChange={handleChange}
                    />
                </Form.Item>
                :null
            }

            <Form.Item>
                <Input.TextArea
                    name={isPosting ? "postContent" : "commentContent"}
                    value={isPosting ? post : comment}
                    onChange={handleChange}
                    onPressEnter
                />
            </Form.Item>

            <Form.Item>
                <Input
                    type="submit"
                    value={isPosting ? "Submit" : "Comment"}
                />
            </Form.Item>
        </Form>
    )
}