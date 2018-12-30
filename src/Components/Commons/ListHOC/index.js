import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {dataFetchFilter} from "../../../Utils";
import {mapDispatches, mapStates} from "../../../Redux/Reducers";



export default function (WrappedUIComponent,type) {
    const mapState = (state) => ({
        list : mapStates.getFetchList(state),
        isSuccess : mapStates.getAppIsSuccess(state),
    });

    const mapDispatch = {
        fetchDataAction: mapDispatches.fetchDataAction,
    };

    @withRouter
    @connect(mapState,mapDispatch)
    class ListHOC extends Component {
        static propTypes = {
            list : PropTypes.array,
            patchId : PropTypes.number,
            fetchDataAction : PropTypes.func,
            match : PropTypes.object,
        };

        constructor(props) {
            super(props);
            this.state = {
                firstMount : true
            }
        }


        componentWillMount () {
            if (this.state.firstMount) {
                this.props.fetchDataAction(
                    dataFetchFilter({
                        type : type,
                        id : this.props.match.params.id,
                    })
                );

                this.setState({
                    firstMount : false,
                })
            }
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