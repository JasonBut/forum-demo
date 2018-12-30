import React from "react";
import {Icon} from "antd";
import "./loading.less";


export default () => (
    <div className="loading">
        <Icon type="loading" />
        <p>Loading...</p>
    </div>
)