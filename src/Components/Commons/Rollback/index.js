import React from "react";
import {Icon} from "antd";
import "./rollback.less";


export default () => (
    <Icon
        id="rollBack"
        type="rollback"
        onClick={() => window.history.go(-1)}
    />
);