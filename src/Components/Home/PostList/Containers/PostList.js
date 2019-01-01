import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/Reducers"
import PostListArea from "./PostListArea";
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
        const {isPosting} = this.props; //根据是否正在编辑状态去渲染Editor组件
        return (
            <>
                <PostButton mode="publish" />
                {isPosting ? <Editor mode="post" /> : null}
                <PostListArea />
            </>
        );
    }
}


export default PostList;