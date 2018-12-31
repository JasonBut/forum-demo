import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/Reducers"
import PostListArea from "./PostListItem";
import {Editor,PostButton} from "../../../Commons";

const mapState = (state) => ({
    isPosting : mapStates.getFormIsPosting(state),
})

@connect(mapState)
class PostList extends Component{
    static propTypes = {
        isPosting : PropTypes.bool,
    }

    render() {
        const {isPosting} = this.props;
        return (
            <>
                <PostButton />
                {isPosting ? <Editor mode="post" /> : null}
                <PostListArea />
            </>
        );
    }
}


export default PostList;