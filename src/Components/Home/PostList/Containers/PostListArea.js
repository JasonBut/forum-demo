import React,{Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Lazy, DataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";

const PostListAreaUI = Lazy(() => import("../UI/PostListAreaUI"));

const mapState = (state) => ({
    list : mapStates.getFetchList(state),
    patchId : mapStates.getPathId(state),
    isSuccess : mapStates.getAppIsSuccess(state),
});

const mapDispatch = {
    fetchDataAction: mapDispatches.fetchDataAction,
};

@connect(mapState,mapDispatch,undefined,{pure : false})
class PostListArea extends Component {
    static propTypes = {
        list : PropTypes.array,
        patchId : PropTypes.number,
        fetchDataAction : PropTypes.func,
    };

    componentDidMount () {
        this.props.fetchDataAction(
            DataFetchFilter({
                type : "Posts",
                id : this.props.patchId,
            })
        );
    }

    render() {
        const {list,isSuccess} = this.props;
        if (isSuccess && Array.isArray(list) && list.length >= 1) {
            return (
                <div id="postList">
                    <PostListAreaUI {...this.props} />
                </div>
            )
        } else {
            return null;
        }
    }
}


export default PostListArea;