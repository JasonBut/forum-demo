import React from "react";
import {Icon} from "antd";
import "./loading.less";


export default function () {
    return (
        <div className="loading">
            <Icon type="loading" />
            <p>Loading...</p>
        </div>
    )
}