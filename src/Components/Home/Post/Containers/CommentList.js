import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy} from "../../../../Utils";

import {mapStates} from "../../../../Redux/Reducers";
import {DataFetchFilter} from "../../../../Utils/";
import {fetchDataAction} from "../../../../Redux/Reducers/UIFetchDataReducers";

const CommentListView = Lazy(() => import("../UI/CommentListView"));

const mapState = () => ({
    list : mapStates.getFetchData("list"),
});

const mapDispatch = {
    fetchListAction: fetchDataAction
};

@connect(mapState,mapDispatch)
class CommentList extends Component {
    componentDidMount () {
        this.props.fetchListAction("List",
            DataFetchFilter({
                type : "Comments",
                id : this.props.match.params.id,
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