import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./button.less";
import {Button} from "antd";
import {mapStates,mapDispatches} from "../../../Redux/Reducers";


const mapState = (state) => ({
    isEditing : mapStates.getFormIsEditing(state),
});

const mapDispatch = {
    toggleEditing : mapDispatches.formToggleIsEditing,
};

@connect(mapState,mapDispatch)
class PostButton extends Component{
    static propTypes = {
        isEditing: PropTypes.bool,
        toggleEditing: PropTypes.func,
    };

    render() {
        const {toggleEditing, isEditing} = this.props;
        return (
            <div className="button-area">
                <Button
                    id="publish-button"
                    type="primary"
                    onClick={() => toggleEditing(isEditing)}
                    ghost
                >
                    Publish
                </Button>
            </div>
        )
    }
}

export default PostButton;