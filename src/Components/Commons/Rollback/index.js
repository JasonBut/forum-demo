import React,{Component} from "react";
import {Icon} from "antd";
import "./rollback.less";

class RollBack extends Component {
    render() {
        return (
            <Icon
                id="rollBack"
                type="rollback"
                onClick={() => window.history.back()}
            />
        )
    }
}

export default RollBack;