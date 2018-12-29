import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy,DataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";


const BoardView = Lazy(() => import("../UI/Board-view"));

const mapState = () => {
    return{
        list : mapStates.getFetchData("list"),
    }
};

const mapDispatch = {
    fetchListAction: mapDispatches.fetchDataAction,
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