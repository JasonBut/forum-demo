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
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
};

@connect(mapState,mapDispatch)
class Editor extends Component {
    render() {
        return (
            <EditorUI {...this.props} />
        );
    }
}


export default Editor;