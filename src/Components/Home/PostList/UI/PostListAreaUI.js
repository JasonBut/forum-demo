import React from "react";
import {List} from "antd";
import PropTypes from "prop-types";
import {Lazy} from "../../../../Utils";

const PostListItem = Lazy(() => import("../Containers/PostListItem"));

PostListAreaUI.propTypes = {
    list :  PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string,
        title : PropTypes.string,
        postDate : PropTypes.string,
        userId : PropTypes.string,
    })).isRequired,
};

export default function PostListAreaUI (props) {
    return (
        <List
            className="post-list"
            dataSource={props.list}
            bordered
            renderItem={(item) => {
                return (
                    <PostListItem {...item} />
                )
            }}
        />
    )
}