import React from "react";
import PropTypes from "prop-types";
import {Input,Form} from "antd";

EditorUI.defaultProps = {
    postElemName : "",
    titleElemName : "",
    title : "",
    value : "",
    handleChange : PropTypes.func.isRequired,
    isPostMode : PropTypes.bool.isRequired,
}

EditorUI.propTypes = {
    postElemName : PropTypes.string.isRequired,
    titleElemName : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    handleChange : PropTypes.func.isRequired,
    isPostMode : PropTypes.bool.isRequired,
}

export default function EditorUI (props) {
    const {postElemName,titleElemName,title,value,handleChange, isPostMode} = props;

    return (
        <Form className="editor">
            {isPostMode ?
                <Form.Item>
                    <Input
                        name={titleElemName}
                        type="text"
                        value={title}
                        onChange={handleChange}
                    />
                </Form.Item>
                :null
            }

            <Form.Item>
                <Input.TextArea
                    name={isPostMode ? postElemName : "commentContent"}
                    value={value}
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