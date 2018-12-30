import React from "react";
import PropTypes from "prop-types";
import {Divider,List} from "antd";

import {ListHOC} from "../../../Commons"
import CommentListItemUI from "../UI/CommentListItemUI"

CommentListUI.propTypes = {
    list : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string,
        content : PropTypes.string,
        commentDate : PropTypes.string,
        author : PropTypes.string,
    })).isRequired,
};

function CommentListUI (props) {
    return (
        <div id="commentList">
            <Divider>Comments</Divider>
            <List
                className="comment-list"
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
}

export default ListHOC(CommentListUI,"comments")