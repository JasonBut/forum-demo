import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./button.less";
import {Button} from "antd";
import {mapStates,mapDispatches} from "../../../Redux/Reducers";


const mapState = (state,ownProps) => ({
    isPosting : mapStates.getFormIsPosting(state),
    isLogged : mapStates.getAuthIsLogged(state),
    mode : ownProps.mode,
});

const mapDispatch = {
    toggleEditing : mapDispatches.formToggleIsPosting,
};

@connect(mapState,mapDispatch)
class PostButton extends Component{
    static propTypes = {
        mode: PropTypes.string.isRequired,
        isPosting: PropTypes.bool,
        isLogged: PropTypes.bool,
        toggleEditing: PropTypes.func,
    };

    render() {
        const {toggleEditing, isPosting, isLogged, mode} = this.props;

        const buttonValue = ( isPosting
                ? "取消"
                : (mode.toLowerCase() === "publish" ? "发帖" : "编辑帖子")
        );

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
    }
}

export default PostButton;