import React from "react";
import PropTypes from "prop-types";
import {Form,Input} from "antd";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";



const EditorUI = (props) => {
    const {
        buttonValue,
        isActive,
        isComment,
        controls,
        textareaType,
        getFieldDecorator,
        handleSubmit,
        err
    } = props;

    return (
        <Form
            className="editor animated zoomInUp"
            onSubmit={handleSubmit}
        >
            {!isComment &&
            <Form.Item>
                {getFieldDecorator("title",{
                    rules : [{
                        required : true ,
                        message : "请输入标题",
                    }],
                })(
                    <Input
                        type="text"
                        placeholder="请输入标题"
                    />
                )}
            </Form.Item>
            }

            <Form.Item>
                {getFieldDecorator(textareaType,{
                    rules : [{
                        required : true,
                        message : "请输入内容"
                    }],
                })(
                    <BraftEditor
                        contentClassName={textareaType}
                        excludeControls={controls}
                        placeholder="请输入内容"
                    />
                )}
            </Form.Item>

            { (isActive && err) && <p className="err-message">{err}</p> }

            <Form.Item>
                <Input
                    type="submit"
                    id="submitButton"
                    value={buttonValue}
                />
            </Form.Item>
        </Form>
    );
};

EditorUI.propTypes = {
    handleSubmit : PropTypes.func.isRequired,
    isComment : PropTypes.bool.isRequired,
    err : PropTypes.string,
};

export default EditorUI;