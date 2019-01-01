import React from "react";
import PropTypes from "prop-types";
import {Input,Form} from "antd";

EditorUI.propTypes = {
    mode : PropTypes.string.isRequired,
    post : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    comment : PropTypes.string.isRequired,
    handleChange : PropTypes.func.isRequired,
    isPosting : PropTypes.bool.isRequired,
}

export default function EditorUI (props) {
    const {mode,post,title,comment,handleChange,isPosting} = props;
    const isPostMode = mode && mode.toLowerCase() === "post"
    return (
        <Form className="editor">
            {isPostMode ?
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
                    name={isPostMode ? "postContent" : "commentContent"}
                    value={isPosting ? post : comment}
                    onChange={handleChange}
                    onPressEnter
                />
            </Form.Item>

            <Form.Item>
                <Input
                    type="submit"
                    value={isPostMode ? "提交" : "发表评论"}
                />
            </Form.Item>
        </Form>
    )
}