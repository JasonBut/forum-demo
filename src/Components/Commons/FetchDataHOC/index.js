import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {mapDispatches, mapStates} from "../../../Redux/Reducers";

export default (WrappedUIComponent,type) => {
    const mapState = (state) => ({
        list : mapStates.getFetchList(state),
        post : mapStates.getFetchPost(state),
        isSuccess : mapStates.getAppIsSuccess(state),
    });

    const mapDispatch = {
        fetchDataAction: mapDispatches.fetchDataAction,
    };

    @withRouter
    @connect(mapState,mapDispatch)
    class FetchDataHOC extends Component {
        static propTypes = {
            list : PropTypes.array,
            post : PropTypes.object,
            fetchDataAction : PropTypes.func,
            match : PropTypes.object,
            isSuccess : PropTypes.bool,
        };

        constructor(props) {
            super(props);
            this.state = {
                firstMount : true
            }
        }


        componentWillMount () {
            if (this.state.firstMount) {
                this.props.fetchDataAction({
                        type : type,
                        rule : this.props.match.params.id,
                    });

                this.setState({
                    firstMount : false,
                })
            }
        }
        render() {
            const {list,post,isSuccess} = this.props;
            if (type === "post") {
                return (
                    (isSuccess && post && typeof post === "object")
                        ? <WrappedUIComponent {...post} />
                        : null
                );
            } else {
                return (
                    (isSuccess && Array.isArray(list) && list.length > 0)
                        ? <WrappedUIComponent list={list} />
                        : null
                )
            }
        }
    }

    return FetchDataHOC
}