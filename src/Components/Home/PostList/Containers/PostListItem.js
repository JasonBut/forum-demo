import React,{Component} from "react";
import PostListItemView from "../UI/PostListItem-view"

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author : "Jason But",
        }
    }

    render() {
        return (
            <div id="postList">
                <PostListItemView {...this.props} author={this.state.author} />
            </div>

        );
    }
}
