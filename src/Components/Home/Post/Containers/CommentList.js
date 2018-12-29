import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy,DataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";

const CommentListView = Lazy(() => import("../UI/CommentListView"));

const mapState = () => ({
    list : mapStates.getFetchData("list"),
    pathId : mapStates.getPathId(),
});

const mapDispatch = {
    fetchListAction: mapDispatches.fetchDataAction,
};

@connect(mapState,mapDispatch)
class CommentList extends Component {
    componentDidMount () {
        this.props.fetchListAction("List",
            DataFetchFilter({
                type : "Comments",
                id : this.props.pathId,
            })
        );
    }
    render() {
        const {list} = this.props;
        if (Array.isArray(list) && list.length > 0) {
            return (
                <CommentListView {...this.props} />
            )
        } else {
            return null;
        }
    }
}

export default CommentList