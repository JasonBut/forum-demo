import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy} from "../../../../Utils";

import {mapStates} from "../../../../Redux/Reducers";
import {DataFetchFilter} from "../../../../Utils/";
import {fetchDataAction} from "../../../../Redux/Reducers/UIFetchDataReducers";

const BoardView = Lazy(() => import("../UI/Board-view"));

const mapState = () => {
    return{
        list : mapStates.getFetchData("list"),
    }
};

const mapDispatch = {
    fetchListAction: fetchDataAction
};

@connect(mapState,mapDispatch)
class BoardContainer extends Component {
    componentDidMount () {
        this.props.fetchListAction("List",
            DataFetchFilter({
                type : "Boards",
            })
        );
    }

    render() {
        const {list} = this.props;
        if (Array.isArray(list) && list.length > 0) {
            return(
                <BoardView {...this.props} />
            )
        } else {
            return null;
        }
    }
}

export default BoardContainer;