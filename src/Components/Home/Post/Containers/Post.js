import React,{Component} from "react";
import {Lazy} from "../../../../Utils";
import {connect} from "react-redux";
import {mapStates} from "../../../../Redux/Reducers";
import {fetchDataAction} from "../../../../Redux/Reducers/UIFetchDataReducers";
import DataFetchFilter from "../../../../Utils/api/DataFetchFilter";

const PostView = Lazy(() => import("../UI/Post-view"));

const mapState = () => ({
    post : mapStates.getFetchData("post"),
});

const mapDispatch = {
    fetchDataAction
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