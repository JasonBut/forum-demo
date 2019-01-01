import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates,mapDispatches} from "../../../../Redux/Reducers";
import EditorUI from "../UI/EditorUI";


const mapState = (state,ownProps) => ({
    title: mapStates.getFormValue(state,"postTitle"),
    post: mapStates.getFormValue(state,"postContent"),
    comment: mapStates.getFormValue(state,"commentContent"),
    isPosting : mapStates.getFormIsPosting(state),
    mode : ownProps.mode,
    amendTitle: ownProps.title,
    amendContent: ownProps.content,
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
};

@connect(mapState,mapDispatch)
class Editor extends Component {
    static propTypes = {
        amendTitle: PropTypes.string,
        amendContent: PropTypes.string,
    };

    //用于发送给handleChange的对象结构
    amendData = (name,value) => {
        return { target : {name, value} }
    };

    componentWillMount () {
        //如果编辑器状态是编辑帖子,则将父组件传入的帖子数据输入相应文本框中
        const {amendTitle,amendContent,handleChange} = this.props;
        amendTitle && handleChange(this.amendData("postTitle",amendTitle));
        amendContent && handleChange(this.amendData("postContent",amendContent));
    };

    render() {
        return (
            <EditorUI {...this.props} />
        );
    }
}


export default Editor;