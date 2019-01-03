import React from "react";
import PropTypes from "prop-types";
import {Input,Form} from "antd";

EditorUI.defaultProps = {
    title : "",
    post : "",
    comment : "",
}

EditorUI.propTypes = {
    title : PropTypes.string.isRequired,
    post : PropTypes.string.isRequired,
    comment : PropTypes.string.isRequired,
    handleChange : PropTypes.func.isRequired,
    handleSubmit : PropTypes.func.isRequired,
    isComment : PropTypes.bool.isRequired,
    err : PropTypes.string,
}

export default function EditorUI (props) {
    const {title, comment, post, handleChange, handleSubmit, isComment, isActive, err} = props;
    //根据编辑器模式渲染不同内容
    const textareaClassName = isComment ? "commentContent" : "postContent";
    const textareaValue = isComment ? comment : post ;
    const buttonValue = isComment ? "发表评论" : "提交" ;
    return (
        <Form
            className="editor"
            onSubmit={handleSubmit}
        >
            {!isComment &&
                <Form.Item>
                    <Input
                        name="postTitle"
                        type="text"
                        value={title}
                        onChange={handleChange}
                    />
                </Form.Item>
            }

            <Form.Item>
                <Input.TextArea
                    name={textareaClassName}
                    value={textareaValue}
                    onChange={handleChange}
                />
            </Form.Item>

            { (isActive && err) && <p className="err-message">{err}</p> }
            <Form.Item>
                <Input
                    type="submit"
                    value={buttonValue}
                />
            </Form.Item>
        </Form>
    )
}