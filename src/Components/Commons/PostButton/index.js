import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./button.less";
import {Button} from "antd";
import {mapStates,mapDispatches} from "../../../Redux/Reducers";


const mapState = (state) => ({
    isPosting : mapStates.getFormIsPosting(state),
});

const mapDispatch = {
    toggleEditing : mapDispatches.formToggleIsEditing,
};

@connect(mapState,mapDispatch)
class PostButton extends Component{
    static propTypes = {
        isPosting: PropTypes.bool,
        toggleEditing: PropTypes.func,
    };

    render() {
        const {toggleEditing, isPosting} = this.props;
        return (
            <div className="button-area">
                <Button
                    id="publish-button"
                    type="primary"
                    onClick={() => toggleEditing(isPosting)}
                    ghost
                >
                    Publish
                </Button>
            </div>
        )
    }
}

export default PostButton;