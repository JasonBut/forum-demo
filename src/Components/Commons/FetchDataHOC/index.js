import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {mapDispatches, mapStates} from "../../../Redux/Reducers";

export default (WrappedUIComponent,type) => {
    const mapState = (state) => ({
        list : mapStates.getList(state), //列表数据
        post : mapStates.getPost(state), //帖子数据
        isSuccess : mapStates.getAppIsSuccess(state), //App数据获取成功状态
    });

    const mapDispatch = {
        fetchData: mapDispatches.fetchData,
    };

    @withRouter
    @connect(mapState,mapDispatch)
    class FetchDataHOC extends Component {
        static propTypes = {
            list : PropTypes.array,
            post : PropTypes.object,
            fetchData : PropTypes.func.isRequired,
            match : PropTypes.object.isRequired,
            isSuccess : PropTypes.bool.isRequired,
        };

        constructor(props) {
            super(props);
            this.state = {
                firstMount : true
            }
        }


        componentWillMount () {
            //第一次装载才发送获取数据请求
            if (this.state.firstMount) {
                this.props.fetchData({
                    mode : "GET",
                    type : type,
                    rule : this.props.match.params.id,
                });

                this.setState({
                    firstMount : false,
                })
            }
        }
        render() {
            //根据帖子或列表的条件类型,在App确定获取数据成功时渲染组件
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