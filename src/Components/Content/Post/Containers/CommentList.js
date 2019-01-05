import React from "react";
import PropTypes from "prop-types";
import {Divider,List} from "antd";
import FetchDataHOC from "../../HOC";
import CommentListItemUI from "../UI/CommentListItemUI"

const CommentListUI = (props) => {
    return (
        <div id="commentList">
            <Divider>Comments</Divider>
            <List
                className="comment-list animated fadeIn"
                dataSource={props.list}
                bordered
                renderItem={(item) => {
                    return(
                        <CommentListItemUI {...item} />
                    )
                }}
            />
        </div>
    )
};

CommentListUI.propTypes = {
    list : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string,
        content : PropTypes.string,
        commentDate : PropTypes.string,
        author : PropTypes.string,
    })).isRequired,
};

export default FetchDataHOC(CommentListUI,"comments")