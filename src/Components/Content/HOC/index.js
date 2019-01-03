import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {mapDispatches, mapStates} from "../../../Redux/Reducers";

const mapState = (state) => ({
    list : mapStates.getList(state), //列表数据
    post : mapStates.getPost(state), //帖子数据
    isDone : mapStates.getAppIsDone(state), //App数据获取成功状态
});

const mapDispatch = {
    getFetchData: mapDispatches.getFetchData,
};

export default (WrappedUIComponent,type) => {
    @withRouter
    @connect(mapState,mapDispatch)
    class FetchDataHOC extends Component {
        static propTypes = {
            list : PropTypes.array,
            post : PropTypes.object,
            getFetchData : PropTypes.func.isRequired,
            match : PropTypes.object.isRequired,
            isDone : PropTypes.bool.isRequired,
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
                this.props.getFetchData({
                    type : type,
                    rule : this.props.match.params.id,      //根据路径id作为条件去获取相应内容
                });

                this.setState({
                    firstMount : false,
                })
            }
        };

        render() {
            //根据帖子或列表的条件类型,在App确定获取数据成功时渲染组件
            const {list,post,isDone} = this.props;
            if (isDone) {
                if (type === "post") {
                    return (
                        (post && typeof post === "object")
                            ? <WrappedUIComponent {...post} />
                            : null
                    );
                } else {
                    return (
                        (Array.isArray(list) && list.length > 0)
                            ? <WrappedUIComponent list={list} />
                            : null
                    )
                }

            } else {
                    return null;
            }
        }
    }

    return FetchDataHOC
}