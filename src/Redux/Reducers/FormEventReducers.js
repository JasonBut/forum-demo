import Types from "../ActionsTypes"
import BraftEditor from "braft-editor";

const initialState = {
    loginUsername : {
        value : "Jason",
    },
    loginPassword : {
        value : "aaaaaa",
    },
    regNickname : "",
    title : {
        value : "",
    },
    postContent : {
        value : BraftEditor.createEditorState(null),
    },
    commentContent : {
        value : BraftEditor.createEditorState(null),
    },
    isPosting : false,
};

export default function FormEventReducers (state = initialState, action) {
    switch (action.type) {

        case Types.FORM_VALUE_ONCHANGE :
            return {
                ...state,
                ...action.payload
            };

        case Types.FORM_TOGGLE_POSTING :
            return {
                ...state,
                isPosting : action.isPosting,
                title : {
                    value : "",
                },
                postContent : {
                    value : "",
                },
                commentContent : {
                    value : "",
                },
            };

        case Types.FORM_VALUE_PUBLISH_SUCCEEDED :
            return {
                ...state,
                title : {
                    value : "",
                },
                postContent : {
                    value : "",
                },
                commentContent : {
                    value : "",
                },
                isPosting : false,
            };

        case Types.AUTH_LOGIN_SUCCEEDED :
            return {
                ...state,
                loginUsername: {value : ""},
                loginPassword: {value : ""},
            };

        default :
            return state;
    }
}