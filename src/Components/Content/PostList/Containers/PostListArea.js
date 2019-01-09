import React from "react";
import PropTypes from "prop-types";
import {List} from "antd";
import FetchDataHOC from "../../HOC";
import PostListItemUI from "../UI/PostListItemUI";

PostListArea.propTypes = {
    list :  PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string,
        title : PropTypes.string,
        postDate : PropTypes.string,
        author : PropTypes.string,
    })).isRequired,
};

function PostListArea (props) {
    return (
        <div id="postList">
            <List
                className="post-list animated fadeIn"
                dataSource={props.list}
                pagination={{
                    pageSize: 8,
                    size: "small",
                    simple: true,
                    hideOnSinglePage : true,
                }}
                bordered
                renderItem={(postData) => {
                    const postId = postData.id.split("_")[1];
                    const props = {...postData,postId};
                    return (
                        <PostListItemUI {...props} />
                    )
                }}
            />
        </div>
    )
}

export default FetchDataHOC(PostListArea,"posts");