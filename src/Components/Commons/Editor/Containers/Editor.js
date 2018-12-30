import React,{Component} from "react";
import {connect} from "react-redux";
import {mapStates,mapDispatches} from "../../../../Redux/Reducers";
import EditorUI from "../UI/EditorUI";


const mapState = (state) => ({
    title: mapStates.getFormValue(state,"postTitle"),
    post: mapStates.getFormValue(state,"postContent"),
    comment: mapStates.getFormValue(state,"commentContent"),
    isEditing : mapStates.getFormIsEditing(state),
});

const mapDispatch = {
    handleChange : mapDispatches.formDataOnChange,
};

@connect(mapState,mapDispatch)
class Editor extends Component {
    render() {
        return (
            this.props.isEditing && <EditorUI {...this.props} />
        );
    }
}


export default Editor;