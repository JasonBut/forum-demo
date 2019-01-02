import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {mapStates,mapDispatches} from "../../../../Redux/Reducers";
import EditorUI from "../UI/EditorUI";


const mapState = (state,ownProps) => ({
    title: mapStates.getFormValue(state,"postTitle"),               //新帖标题
    post: mapStates.getFormValue(state,"postContent"),              //新帖内容
    comment: mapStates.getFormValue(state,"commentContent"),        //评论内容
    isPosting : mapStates.getFormIsPosting(state),                  //编辑状态
    authorId : mapStates.getAuthUserId(state),                      //发布者id
    err : mapStates.getErrorMessage(state),                         //发布者id
    mode : ownProps.mode,                                           //编辑器模式
    oldTitle : ownProps.title,                                      //父组件传入的已有帖子标题
    oldContent : ownProps.content,                                  //父组件传入的已有帖子内容

});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
    handleSubmit : mapDispatches.formValuePublish,
    toggleIsPosting : mapDispatches.formToggleIsPosting,
};

@withRouter
@connect(mapState,mapDispatch)
class Editor extends Component {
    static propTypes = {
        oldTitle: PropTypes.string,
        oldContent: PropTypes.string,
        postContent: PropTypes.string,
        postTitle: PropTypes.string,
        commentContent : PropTypes.string,
        err : PropTypes.string,
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

    constructor(props) {
        super(props);
        this.state = {
            isActive : false,   //可用于存在多个编辑器时定位特定编辑器
        };
    }


    componentDidMount() {
        const {mode} = this.props;
        const lowerCaseMode = mode && mode.toLowerCase();
        //如果编辑器当前正在编辑已有帖子,则将父组件传入的帖子数据填入对应文本框中
        if (lowerCaseMode === "amend") {
            const {oldContent, oldTitle, handleChange} = this.props;
            oldTitle && handleChange(this.amendData("postTitle",oldTitle));
            oldContent && handleChange(this.amendData("postContent",oldContent));
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

    //模拟发送给handleChange的对象结构
    amendData = (name,value) => {
        return { target : { name, value } }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isActive : true,
        });
        const {postContent,postTitle,commentContent} = event.target;
        const {location : { pathname }, mode, authorId} = this.props;
        const isComment = this.isComment;
        const pathId = pathname.split("/")[2];
        const title = postTitle && postTitle.value;
        const  value =  isComment
            ? (commentContent && commentContent.value)
            : (postContent && postContent.value);

        let payload = {value, pathId, mode, authorId, isComment};
        payload = Object.assign( payload,( title ? {title} : {} ) );
        this.props.handleSubmit(payload)
    };



    render() {
        //过滤并调整往UI组件传递的props
        const {post, title, comment, err, handleChange} = this.props;
        const props = {
            isComment : this.isComment,
            isActive : this.state.isActive,
            handleSubmit : this.handleSubmit,
            handleChange,
            title,
            post,
            comment,
            err,
        };

        return (
            <EditorUI {...props} />
        );
    }
}


export default Editor;