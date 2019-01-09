import React from "react";
import PropTypes from "prop-types";
import {Divider,List} from "antd";
import FetchDataHOC from "../../HOC";
import CommentListItemUI from "../UI/CommentListItemUI"

const CommentListUI = (props) => {
    return (
        <div id="commentList" >
            <Divider className="animated fadeInUp slower">Comments</Divider>
            <List
                className="comment-list animated fadeInUp slow"
                dataSource={props.list}
                pagination={{
                    pageSize: 5,
                    size: "small",
                    simple: true,
                    hideOnSinglePage : true,
                }}
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