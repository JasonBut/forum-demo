import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/";
import Post from "./Post";
import CommentList from "./CommentList";
import Editor from "../../../Editor";
import {PostButton,NotFound} from "../../../Commons/";

const mapState = (state) => ({
    isPosting : mapStates.getFormIsPosting(state),
    isLogged : mapStates.getAuthIsLogged(state),
    noMatch : mapStates.getNoMatch(state),
    post : mapStates.getPost(state),
    authUserId : mapStates.getAuthUserId(state),
});

@connect(mapState)
class PostArea extends Component {
    static propTypes = {
        post : PropTypes.object,
        noMatch : PropTypes.bool,
        isPosting : PropTypes.bool.isRequired,
        isLogged : PropTypes.bool.isRequired,
        authUserId : PropTypes.string.isRequired,
    };
    render() {
        const {isLogged, authUserId, isPosting, post, noMatch} = this.props;

        if (noMatch) {return <NotFound />}  //如没有返回数据,重定向到404页面

        let isEditable, title, content, authorId;
        //获取到post数据后再传递prop到子组件,并根据登录和编辑状态条件去渲染PostButton和Editor组件
        post && (
            (title = post.title) &&
            (content = post.content) &&
            (authorId = post.userId) &&
            (isEditable = (authorId === authUserId))
        );
        return (
            <>
                { (isLogged && isEditable)
                    ? <PostButton>编辑帖子</PostButton>
                    : null
                }
                <div id="post">
                    { isPosting
                        ? <Editor mode="amend" title={title} content={content} />
                        : <Post />
                    }
                    <CommentList />
                    {isLogged && <Editor mode="comment" />}
                </div>
            </>
        );
    }
}

export default PostArea;