import React from "react";
import "./editor.less";
import {Form, Input} from "antd";


export default function () {
    return (
        <Form id="editor">
            <Form.Item>
                <Input
                    name="title"
                    type="text"
                />
            </Form.Item>

            <Form.Item>
                <Input.TextArea
                    name="content"
                    onPressEnter
                />
            </Form.Item>
        </Form>
    )
}