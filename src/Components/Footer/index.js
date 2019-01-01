import React from "react";
import {Layout,Icon} from "antd";
import "./footer.less";

const {Footer} = Layout;

export default () => (
        <Footer className="footer">
            <span>
                <Icon type="github" />
                <span>
                    <a href="https://github.com/JasonBut" rel="noopener noreferrer" target="_blank">Github</a>
                </span>
            </span>

            <span>
                    <Icon type="phone" />
                    <span>13650700330</span>
             </span>

            <span>
                    <Icon type="qq" />
                    <span>153436677</span>
            </span>

            <span>
                    <Icon type="mail" />
                    <span>
                        <a href="mailto://Jason.But@yahoo.com" rel="noopener noreferrer" target="_blank">
                            Jason.But@yahoo.com
                        </a>
                    </span>
            </span>
        </Footer>
)
