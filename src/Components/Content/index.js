import React from "react";
import {Layout} from "antd";
import {Rollback} from "../Commons";
import "./home.less";



const {Content} = Layout;

export default (props) => (
    <Content id="content">
        <Rollback />
        {props.children}
    </Content>
)