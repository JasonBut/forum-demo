import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./button.less";
import {Button} from "antd";
import {mapStates,mapDispatches} from "../../../Redux/";

const mapState = (state) => ({
    isPosting : mapStates.getFormIsPosting(state),
    isLogged : mapStates.getAuthIsLogged(state),
});

const mapDispatch = {
    toggleEditing : mapDispatches.formToggleIsPosting,
};

const PostButton = (props) =>     {
    const {toggleEditing, isPosting, isLogged, children} = props;
    const buttonValue = ( isPosting ? "取消" : children);

    return (
        <div className="button-area">
            {
                /*登录后才渲染按钮*/
                isLogged && (
                    <Button
                        id="publish-button"
                        type="primary"
                        onClick={() => toggleEditing(isPosting)}
                        ghost
                    >
                        {buttonValue}
                    </Button>
                )
            }
        </div>
    )
};

PostButton.propTypes = {
    isPosting: PropTypes.bool,
    isLogged: PropTypes.bool,
    toggleEditing: PropTypes.func,
    children : PropTypes.string.isRequired,
};

export default connect(mapState,mapDispatch)(PostButton);