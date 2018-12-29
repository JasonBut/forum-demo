import React,{Component} from "react";
import {Icon} from "antd";
import "./rollback.less";
import {history} from "../../../Redux";

class RollBack extends Component {
    render() {
        return (
            <Icon
                id="rollBack"
                type="rollback"
                onClick={() => history.goBack()}
            />
        )
    }
}

export default RollBack;