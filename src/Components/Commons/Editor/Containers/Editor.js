import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates,mapDispatches} from "../../../../Redux/Reducers";
import EditorUI from "../UI/EditorUI";


const mapState = (state,ownProps) => ({
    postTitle: mapStates.getFormValue(state,"postTitle"),           //新帖标题
    postContent: mapStates.getFormValue(state,"postContent"),       //新帖内容
    amendTitle: mapStates.getFormValue(state,"amendTitle"),         //编辑已有帖子标题
    amendContent: mapStates.getFormValue(state,"amendContent"),     //编辑已有帖子内容
    comment: mapStates.getFormValue(state,"commentContent"),        //评论内容
    isPosting : mapStates.getFormIsPosting(state),                  //编辑状态
    mode : ownProps.mode,                                           //编辑器模式
    oldTitle: ownProps.title,                                       //父组件传入的已有帖子标题
    oldContent: ownProps.content,                                   //父组件传入的已有帖子内容
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
};

@connect(mapState,mapDispatch)
class Editor extends Component {
    static propTypes = {
        oldTitle: PropTypes.string,
        oldContent: PropTypes.string,
        amendContent: PropTypes.string,
        amendTitle: PropTypes.string,
        postContent: PropTypes.string,
        postTitle: PropTypes.string,
        isPosting : PropTypes.bool.isRequired,
        mode : PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        //如果编辑器当前是编辑已有帖子,则将父组件传入的帖子数据填入对应文本框中
        let {
            mode, isPosting, oldContent, postContent, amendContent,
            oldTitle, postTitle, amendTitle, comment, handleChange,
        } = props;

        !!oldTitle && handleChange(this.amendData("amendTitle",oldTitle));
        !!oldContent && handleChange(this.amendData("amendContent",oldContent));


        this.amendProps = {
            isPostMode : mode && mode.toLowerCase() === "post",   //判断当前模式

            //根据父组件是否有传入已有帖子数据去选择store中相应的文本框内容状态
            post : !!oldContent ? amendContent : postContent,
            title : !!oldTitle ? amendTitle : postTitle,

            //同上, 只是这两个变量用于保存元素name属性, 用于change事件传递数据
            postElemName : !!oldContent ? "amendContent" : "postContent",
            titleElemName : !!oldContent ? "amendTitle" : "postTitle",

            //根据编辑状态去判断当前内容是文章内容还是评论内容
            value : isPosting ? this.post : comment,
        };
    }


    //用于返回发送给handleChange的对象结构
    amendData = (name,value) => {
        return { target : { name, value } }
    };

    render() {
        const {handleChange} = this.props;
        console.log(this.amendProps);
        const props = {...this.amendProps, handleChange};
        return (
            <EditorUI {...props} />
        );
    }
}


export default Editor;