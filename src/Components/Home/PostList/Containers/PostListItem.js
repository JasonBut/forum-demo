import React,{Component} from "react";
import {connect} from "react-redux";
import {Lazy,DataFetchFilter} from "../../../../Utils";
import {mapStates,mapDispatches} from "../../../../Redux/";

const PostListItemView = Lazy(() => import("../UI/PostListItem-view"));



const mapState = () => {
    return{
        list : mapStates.getFetchData("list"),
    }
};

const mapDispatch = {
    fetchListAction: mapDispatches.fetchDataAction,
};

@connect(mapState,mapDispatch)
class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author : "Jason But",
        }
    }

    componentDidMount () {
        this.props.fetchListAction("List",
            DataFetchFilter({
                type : "Posts",
                id : this.props.match.params.id,
            })
        );
    }

    render() {
        const {list} = this.props;
        if (Array.isArray(list) && list.length > 0) {
            return (
                <div id="postList">
                    <PostListItemView {...this.props} author={this.state.author} />
                </div>
            )
        } else {
            return null;
        }
    }
}


export default PostListItem;