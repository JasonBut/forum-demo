import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy,DataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";
import PropTypes from "prop-types";


const BoardView = Lazy(() => import("../UI/BoardUI"));

const mapState = (state) => {
    return{
        list : mapStates.getFetchList(state),
        isSuccess : mapStates.getAppIsSuccess(state),
    }
};

const mapDispatch = {
    fetchDataAction: mapDispatches.fetchDataAction,
};

@connect(mapState,mapDispatch,undefined,{pure : false})
class BoardContainer extends Component {
    static propTypes = {
        list : PropTypes.array,
        fetchDataAction : PropTypes.func,
    };
    componentDidMount () {
        this.props.fetchDataAction(
            DataFetchFilter({
                type : "Boards",
            })
        );
    }

    render() {
        const {list,isSuccess} = this.props;
        if (isSuccess && Array.isArray(list) && list.length > 0) {
            return(
                <BoardView {...this.props} />
            )
        } else {
            return null;
        }
    }
}

export default BoardContainer;