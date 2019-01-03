import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {mapDispatches, mapStates} from "../../../Redux/Reducers";


const mapState = (state) => ({
    list : mapStates.getList(state),        //列表数据
    post : mapStates.getPost(state),        //帖子数据
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
            noMatch : PropTypes.bool,
            getFetchData : PropTypes.func.isRequired,
            match : PropTypes.object.isRequired,

        };

        constructor(props) {
            super(props);
            this.state = {
                firstMount : true
            }
        }

        componentDidMount () {
            this.props.getFetchData({
                type : type,
                rule : this.props.match.params.id,      //根据路径id作为条件去获取相应内容
            });
        };

        render() {
            //根据帖子或列表的条件类型,在App确定获取数据成功时渲染组件
            const {list,post} = this.props;

            if (type === "post") {
                return (
                    (post && typeof post === "object")
                        ? <WrappedUIComponent {...post} />
                        : null
                );

            } else {
                return (
                    (Array.isArray(list))
                        ? <WrappedUIComponent list={list} />
                        : null
                )
            }


        }
    }

    return FetchDataHOC
}