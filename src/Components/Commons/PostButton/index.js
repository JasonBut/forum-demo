import {Button} from "antd";
import React from "react";
import "./button.less";

export default function (props) {
    return (
        <div className="button-area">
            <Button
                id="publish-button"
                type="primary"
                onClick={props.onClick}
                ghost
            >
                Publish
            </Button>
        </div>
    )
}