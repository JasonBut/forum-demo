import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/"
import PostListArea from "./PostListArea";
import Editor from "../../../Editor";
import {PostButton,NotFound} from "../../../Commons";

const mapState = (state) => ({
    isPosting : mapStates.getFormIsPosting(state),
    noMatch : mapStates.getNoMatch(state),  //数据库找不到对应数据
})

@connect(mapState)
class PostList extends Component{
    static propTypes = {
        isPosting : PropTypes.bool,
        noMatch : PropTypes.bool,
    }

    render() {
        const {isPosting, noMatch} = this.props; //根据isPosting状态去渲染Editor组件
        if (noMatch) {return <NotFound />}
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