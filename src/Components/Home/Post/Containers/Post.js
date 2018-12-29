import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy,DataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";
import PropTypes from "prop-types";

const PostView = Lazy(() => import("../UI/PostUI"));

const mapState = (state) => ({
    post : mapStates.getFetchPost(state),
    pathId : mapStates.getPathId(state),
    isSuccess : mapStates.getAppIsSuccess(state),
});

const mapDispatch = {
    fetchDataAction : mapDispatches.fetchDataAction,
};


@connect(mapState,mapDispatch,undefined,{pure : false})
class Post extends Component {
    static propTypes = {
        post : PropTypes.object,
        patchId : PropTypes.number,
        fetchDataAction : PropTypes.func,
    };


    componentWillMount () {
        this.props.fetchDataAction(
            DataFetchFilter({
                type : "Post",
                id : this.props.pathId,
            })
        )
    }
    render() {
        if (this.props.isSuccess) {
            return (
                <PostView {...this.props} />
            );
        } else {
            return null;
        }

    }
}

export default Post