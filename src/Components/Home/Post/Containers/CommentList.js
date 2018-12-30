import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy,DataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";
import PropTypes from "prop-types";

const CommentListView = Lazy(() => import("../UI/CommentListUI"));

const mapState = (state) => ({
    list : mapStates.getFetchList(state),
    pathId : mapStates.getPathId(state),
    isSuccess : mapStates.getAppIsSuccess(state),
});

const mapDispatch = {
    fetchDataAction: mapDispatches.fetchDataAction,
};

@connect(mapState,mapDispatch)
class CommentList extends Component {
    static propTypes = {
        list : PropTypes.array,
        patchId : PropTypes.number,
        fetchDataAction : PropTypes.func,
    };

    componentDidMount () {
        this.props.fetchDataAction(
            DataFetchFilter({
                type : "Comments",
                id : this.props.pathId,
            })
        );
    }
    render() {
        const {list,isSuccess} = this.props;
        if (isSuccess && Array.isArray(list) && list.length >= 1) {
            return (
                <CommentListView {...this.props} />
            )
        } else {
            return null;
        }
    }
}

export default CommentList