import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/Reducers";
import Post from "./Post";
import CommentList from "./CommentList";
import {Editor, PostButton} from "../../../Commons";



const mapState = (state) => ({
    isPosting : mapStates.getFormIsPosting(state),
    isLogged : mapStates.getAuthIsLogged(state),
    post : mapStates.getPost(state),
    authUserId : mapStates.getAuthUserId(state),
});

@connect(mapState)
class PostArea extends Component {
    static propTypes = {
        isPosting : PropTypes.bool,
        isLogged : PropTypes.bool,
        post : PropTypes.object,
        authUserId : PropTypes.string,
    };

    render() {
        const {isLogged, authUserId, isPosting, post} = this.props;
        let isEditable, title, content, authorId;
        post && (
            (title = post.title) &&
            (content = post.content) &&
            (authorId = post.userId) &&
            (isEditable = (authUserId === authorId))
        );
        return (
            <>
                { isLogged && isEditable
                    ? <PostButton mode="amend" />
                    : null
                }
                <div id="post">
                    { isPosting
                        ? <Editor mode="post" title={title} content={content} />
                        : <Post />
                    }
                    <CommentList />
                    <Editor mode="comment" />
                </div>
            </>
        );
    }
}



export default PostArea;