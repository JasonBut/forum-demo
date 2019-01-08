import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {mapStates,mapDispatches} from "../../../Redux/Reducers";
import EditorUI from "../UI/EditorUI";
import BraftEditor from "braft-editor";
import {Form} from "antd";


const mapState = (state,ownProps) => ({
    title: mapStates.getFormValue(state,"title"),                           //新帖标题
    postContent: mapStates.getFormValue(state,"postContent"),               //新帖内容
    commentContent: mapStates.getFormValue(state,"commentContent"),         //评论内容
    isPosting : mapStates.getFormIsPosting(state),                          //编辑状态
    authorId : mapStates.getAuthUserId(state),                              //发布者id
    err : mapStates.getErrorMessage(state),                                 //发布者id
    mode : ownProps.mode,                                                   //编辑器模式
    oldTitle : ownProps.title,                                              //父组件传入的已有帖子标题
    oldContent : ownProps.content,                                          //父组件传入的已有帖子内容
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
    handleSubmit : mapDispatches.formValuePublish,
    toggleIsPosting : mapDispatches.formToggleIsPosting,
};

@withRouter
@connect(mapState,mapDispatch)
@Form.create({
    name : "Editor",
    mapPropsToFields (props) {
        return {
            title : Form.createFormField(props.title),
            commentContent : Form.createFormField(props.commentContent),
            postContent : Form.createFormField(props.postContent),
        }
    },
    onFieldsChange (props,changedFields) {
        props.handleChange(changedFields);
    },
})
class Editor extends Component {
    static propTypes = {
        oldTitle: PropTypes.string,
        oldContent: PropTypes.string,
        isPosting : PropTypes.bool.isRequired,
        mode : PropTypes.string.isRequired,
        authorId : PropTypes.string.isRequired,
        toggleIsPosting : PropTypes.func.isRequired,
        location : PropTypes.shape({
            pathname : PropTypes.string.isRequired,
        }).isRequired,
    };

    //判断是否评论模式
    isComment = this.props.mode && this.props.mode.toLowerCase() === "comment";
    textareaType = this.isComment ? "commentContent" : "postContent";
    controls = this.isComment
        ? ["undo", "redo", "line-height", "superscript", "subscript",
            "text-indent", "headings", "hr", "media", "blockquote"]
        : ["media","blockquote"];

    constructor(props) {
        super(props);
        this.state = {
            isActive : false,   //可用于存在多个编辑器时定位特定编辑器
        };
    }

    componentDidMount() {
        const {mode} = this.props;
        const lowerCaseMode = mode && mode.toLowerCase();
        // 如果编辑器当前正在编辑已有帖子,则将父组件传入的帖子数据填入对应文本框中
        if (lowerCaseMode === "amend") {
            const {oldContent, oldTitle, handleChange} = this.props;
            oldTitle && handleChange({title : {value : oldTitle}});
            oldContent && handleChange({postContent : {value : BraftEditor.createEditorState(oldContent)}});
        }
    };

    componentWillUnmount() {
        /*
        * 避免在isPosting为true(即编辑器开启中)时
        * 切换到帖子内容页面后编辑器依然打开的情况
        */
        const {toggleIsPosting,isPosting} = this.props;
        isPosting && toggleIsPosting(isPosting);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isActive : true,
        });

        const {location : { pathname }, mode, authorId} = this.props;
        const isComment = this.isComment;
        const pathId = pathname.split("/")[2];

        this.props.form.validateFields((error,values) => {
            if (!error) {
                const {title, postContent, commentContent} = values;
                let payload = {
                    content : (postContent || commentContent).toHTML(),
                    title,
                    pathId,
                    mode,
                    authorId,
                    isComment,
                };
                this.props.handleSubmit(payload);
            }
        });
    };

    render(){
        const {err, form : {getFieldDecorator}} = this.props;
        const {isActive} = this.state;
        const {isComment, controls, textareaType, handleSubmit} = this;
        //根据编辑器模式渲染不同内容
        const buttonValue = isComment ? "发表评论" : "提交" ;

        const props = {
            buttonValue,
            isActive,
            isComment,
            controls,
            textareaType,
            getFieldDecorator,
            handleSubmit,
            err
        };

        return (
            <EditorUI {...props} />
        )
    }
}


export default Editor;