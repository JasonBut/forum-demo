import React,{Component} from "react";
import {Lazy} from "../../../../Utils";

const Editor = Lazy(() => import("../../../Commons/Editor"));
const PostButton = Lazy(() => import("../../../Commons/PostButton"));
const PostListItem = Lazy(() => import("./PostListItem"));

export default class extends Component {
    constructor (props) {
        super (props);
        this.state = {
            editable : false,
        }
    }

    publish = () => {
        const editable = !this.state.editable;
        this.setState({
            editable : editable,
        })
    }

    render() {
        return (
            <>
                <PostButton onClick={this.publish} />
                {this.state.editable ? <Editor mode="post" /> : null}
                <PostListItem />
            </>
        );
    }
}