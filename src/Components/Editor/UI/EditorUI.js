import React,{Component} from "react";
// import PropTypes from "prop-types";
import {Input} from "antd";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
//
// EditorUI.defaultProps = {
//     title : "",
//     post : "",
//     comment : "",
// };
//
// EditorUI.propTypes = {
//     title : PropTypes.string.isRequired,
//     post : PropTypes.string.isRequired,
//     comment : PropTypes.string.isRequired,
//     handleChange : PropTypes.func.isRequired,
//     handleSubmit : PropTypes.func.isRequired,
//     isComment : PropTypes.bool.isRequired,
//     err : PropTypes.string,
// };

class EditorUI extends Component {
    render(){
        const {
            title, comment, post, handleChange, handleSubmit, isComment, isActive, err,
        } = this.props;

        //根据编辑器模式渲染不同内容
        const textareaType = isComment ? "commentContent" : "postContent";
        const textareaValue = isComment ? comment : post ;
        const buttonValue = isComment ? "发表评论" : "提交" ;
        const controls = isComment
            ? ["undo", "redo", "line-height", "superscript", "subscript",
                "text-indent", "headings", "hr", "media", "blockquote"]
            : ["media","blockquote"];

        return (
            <form
                className="editor animated zoomInUp"
                onSubmit={handleSubmit}
            >
                {!isComment &&
                <label htmlFor="postTitle">
                    <Input
                        name="postTitle"
                        type="text"
                        value={title}
                        onChange={handleChange("postTitle")}
                        placeholder="请输入标题"
                    />
                </label>
                }

                <BraftEditor
                    contentClassName={textareaType}
                    excludeControls={controls}
                    value={textareaValue}
                    onChange={handleChange(textareaType)}
                    placeholder="请输入内容"
                />

                { (isActive && err) && <p className="err-message">{err}</p> }

                <label htmlFor="submitButton">
                    <Input
                        type="submit"
                        id="submitButton"
                        value={buttonValue}
                    />
                </label>
            </form>
        )
    }

}

export default EditorUI;