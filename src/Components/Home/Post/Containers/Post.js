import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy,DataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";

const PostView = Lazy(() => import("../UI/Post-view"));

const mapState = () => ({
    post : mapStates.getFetchData("post"),
});

const mapDispatch = {
    fetchDataAction : mapDispatches.fetchDataAction,
};


@connect(mapState,mapDispatch)
class Post extends Component {
    componentWillMount () {
        this.props.fetchDataAction("post",
            DataFetchFilter({
                type : "Post",
                id : this.props.match.params.id,
            })
        )
    }
    render() {
        return (
            <PostView {...this.props} />
        );
    }
}

export default Post