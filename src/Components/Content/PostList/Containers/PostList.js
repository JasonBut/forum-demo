import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/Reducers"
import PostListArea from "./PostListArea";
import Editor from "../../../Editor";
import {PostButton} from "../../../Commons";

const mapState = (state) => ({
    isPosting : mapStates.getFormIsPosting(state),
})

@connect(mapState)
class PostList extends Component{
    static propTypes = {
        isPosting : PropTypes.bool,
    }

    render() {
        const {isPosting} = this.props; //根据isPosting状态去渲染Editor组件
        return (
            <>
                <PostButton>发帖</PostButton>
                {isPosting ? <Editor mode="post" /> : null}
                <PostListArea />
            </>
        );
    }
}


export default PostList;