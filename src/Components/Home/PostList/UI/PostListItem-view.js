import React from "react";
import {List} from "antd";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

PostListItemView.defaultProps = {
    list : [
        {
            id : "",
            title : "",
            postDate : "",
        }
    ],
    author : "",
};

PostListItemView.propTypes = {
    list :  PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string,
        title : PropTypes.string,
        postDate : PropTypes.string,
    })).isRequired,
    author : PropTypes.string,
};

export default function PostListItemView (props) {
    return (
        <List
            className="post-list"
            dataSource={props.list}
            bordered
            renderItem={(item) => {
                const postId = item.id.split("_")[1];
                return (
                    <List.Item
                        key={item.id}
                        className="post-list-item"
                    >
                        <h3><Link to={`/post/${postId}`}>{item.title}</Link></h3>
                        <div>
                            <p>作者</p>
                            <p>{props.author}</p>
                        </div>
                        <div>
                            <p>发布时间</p>
                            <p>{item.postDate}</p>
                        </div>
                    </List.Item>
                )
            }}
        />
    )
}