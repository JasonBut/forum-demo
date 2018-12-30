import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {dataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";
import PostView from "../UI/PostUI";

const mapState = (state) => ({
    post : mapStates.getFetchPost(state),
    isSuccess : mapStates.getAppIsSuccess(state),
});

const mapDispatch = {
    fetchDataAction : mapDispatches.fetchDataAction,
};

@withRouter
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
                id : this.props.match.params.id,
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