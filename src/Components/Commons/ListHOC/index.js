import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapDispatches, mapStates} from "../../../Redux/Reducers";
import {dataFetchFilter} from "../../../Utils";


export default function (WrappedUIComponent,type) {
    const mapState = (state) => ({
        list : mapStates.getFetchList(state),
        pathId : mapStates.getPathId(state),
        isSuccess : mapStates.getAppIsSuccess(state),
    });

    const mapDispatch = {
        fetchDataAction: mapDispatches.fetchDataAction,
    };

    @connect(mapState,mapDispatch)
    class ListHOC extends Component {
        static propTypes = {
            list : PropTypes.array,
            patchId : PropTypes.number,
            fetchDataAction : PropTypes.func,
        };

        componentDidMount () {
            this.props.fetchDataAction(
                dataFetchFilter({
                    type : type,
                    id : this.props.pathId,
                })
            );
        }
        render() {
            const {list,isSuccess} = this.props;
            return (
                (isSuccess && Array.isArray(list) && list.length > 0) &&
                <WrappedUIComponent {...this.props} />
            )
        }
    }

    return ListHOC
}