import React,{Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {dataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";
import PostView from "../UI/PostUI";

const mapState = (state) => ({
    post : mapStates.getFetchPost(state),
    pathId : mapStates.getPathId(state),
    isSuccess : mapStates.getAppIsSuccess(state),
});

const mapDispatch = {
    fetchDataAction : mapDispatches.fetchDataAction,
};

@connect(mapState,mapDispatch)
class Post extends Component {
    static propTypes = {
        post : PropTypes.object,
        patchId : PropTypes.number,
        fetchDataAction : PropTypes.func,
    };

    componentWillMount () {
        this.props.fetchDataAction(
            dataFetchFilter({
                type : "Post",
                id : this.props.pathId,
            })
        );
    }

    render() {
        const {post,isSuccess} = this.props;
        if (post) {
            const {title,content,postDate,author} = post;
            const props = {title,content,postDate,author};
            return (
                (isSuccess)
                    ? <PostView {...props} />
                    : null
            );

        } else {
            return null;
        }
    }
}

export default Post