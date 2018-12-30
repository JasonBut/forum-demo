import React,{Component} from "react";
import PostListArea from "./PostListItemHOC";
import {Editor,PostButton} from "../../../Commons";


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
                <PostListArea />
            </>
        );
    }
}