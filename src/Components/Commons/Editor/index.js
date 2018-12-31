import React from "react";
import "./editor.less";
import Editor from "./Containers/Editor";


export default (props) => (
    <Editor mode={props.mode} />
)