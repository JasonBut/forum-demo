import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/Reducers";
import Post from "./Post";
import CommentList from "./CommentList";
import {Editor, PostButton} from "../../../Commons";



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
                <PostButton />
                <div id="post">
                    { this.props.isPosting ? <Editor mode="post" /> : <Post /> }
                    <CommentList />
                    <Editor mode="comment"  />
                </div>
            </>
        );
    }
}



export default PostArea