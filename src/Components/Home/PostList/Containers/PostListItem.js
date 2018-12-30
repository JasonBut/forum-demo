import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {List} from "antd";
import {mapStates,mapDispatches} from "../../../../Redux";


// const mapState = (state) => ({
//     isSuccess : mapStates.getAppIsSuccess(state),
// });

const mapDispatch = {
    fetchDataAction : mapDispatches.fetchDataAction,
};

@connect(null,mapDispatch)
class PostListItem extends Component{
    static propTypes = {
        id : PropTypes.string,
        title : PropTypes.string,
        postDate : PropTypes.string,
        userId : PropTypes.string,
        author : PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            author : "",
        }
    }


    render() {
        const {id, title, postDate} = this.props;
        const postId = id.split("_")[1];
        if (this.props) {
            return (
                <List.Item
                    key={id}
                    className="post-list-item"
                >
                    <h3><Link to={`/post/${postId}`}>{title}</Link></h3>
                    <div>
                        <p>作者</p>
                        <p>{this.state.author}</p>
                    </div>
                    <div>
                        <p>发布时间</p>
                        <p>{postDate}</p>
                    </div>
                </List.Item>
            )
        } else {
            return null;
        }
    }
}


export default PostListItem;