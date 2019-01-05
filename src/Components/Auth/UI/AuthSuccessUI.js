import React from "react";

export default (props) => (
    <div className="auth-success animated bounceIn">
        <p>{props.children}成功，请稍后，即将返回上一个页面</p>
        <button
            className="link-button"
            onClick={() => window.history.go(-1)}
        >
            如没有返回请点击此处
        </button>
    </div>
);