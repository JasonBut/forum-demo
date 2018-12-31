import React from "react";
import PropTypes from "prop-types";
import {Input,Form} from "antd";


EditorUI.propTypes = {
    mode : PropTypes.string,
    post : PropTypes.string,
    title : PropTypes.string,
    comment : PropTypes.string,
    handleChange : PropTypes.func,
    isPosting : PropTypes.bool,
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
                    value={isPostMode ? "Submit" : "Comment"}
                />
            </Form.Item>
        </Form>
    )
}