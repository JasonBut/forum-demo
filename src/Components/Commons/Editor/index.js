import React from "react";
import "./editor.less";
import {Form, Input} from "antd";


export default function (props) {
    const {mode} = props;
    return (
        <Form className="editor">
            {mode.toLowerCase() === "post" ?
                <Form.Item>
                    <Input
                        name="title"
                        type="text"
                    />
                </Form.Item>
                :null
            }

            <Form.Item>
                <Input.TextArea
                    name="content"
                    onPressEnter
                />
            </Form.Item>

            <Form.Item>
                <Input
                    type="submit"
                    value={mode.toLowerCase() === "post" ? "Submit" : "Comment"}
                />
            </Form.Item>
        </Form>
    )
}