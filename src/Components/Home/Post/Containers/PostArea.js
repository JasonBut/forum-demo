import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/Reducers";
import Post from "./Post";
import {Editor} from "../../../Commons";


const mapState = (state) => ({
    isPosting : mapStates.getFormIsPosting(state),
});

@connect(mapState)
class PostArea extends Component {
    static propTypes = {
        isPosting : PropTypes.bool,
    };


    render() {
        return (
            <>
                { this.props.isPosting ? <Editor mode="post" /> : <Post /> }
            </>
        );
    }
}



export default PostArea