import React,{Component} from "react";
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

    amendData = (name,value) => {
        return { target : {name, value} }
    };

    componentWillMount () {
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