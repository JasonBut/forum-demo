import Types from "../ActionsTypes";

//Actions Creators
//UI actions
const getFetchData = (filter) => {
    //得到有效的数据才继续
    if (!filter) {
        return {type : Types.REQUEST_FAILED, err : `Invalid path filter`};
    }

    return {
        type : Types.UI_FETCH_REQUESTED,
        payload : filter,
    };
};

//Form actions
const formDataOnChange = (payload) => {
    return {
        type : Types.FORM_VALUE_ONCHANGE,
        payload,
    }
};

const formLoginSubmit = (payload) => {
    const {
        loginUsername : username,
        loginPassword : password,
        regNickname : nickname,
    } = payload;

    //校检信息
    if (username.length < 5 || (nickname && nickname.length < 4)) {
        return {type : Types.REQUEST_FAILED, err : `账号或昵称必须不少于4字符`};
    }
    if (password.length < 6) {
        return {type : Types.REQUEST_FAILED, err : `密码必须不少于6字符`};
    }

    //区分是注册信息还是登录信息
    if (!nickname) {
        return {
            type : Types.AUTH_LOGIN_REQUESTED,
            payload : { username, password },
        }
    } else {
        return {
            type : Types.AUTH_REGISTER_REQUESTED,
            payload : { username, nickname, password },
        }
    }
};

const formToggleIsPosting = (isPosting) => ({
    type : Types.FORM_TOGGLE_POSTING,
    isPosting : !isPosting,
});

const formValuePublish = (payload) => {
    const {title, content, isComment,...props} = payload;

    //校检内容
    if ( (isComment && !content) || (!isComment && (!content || !title)) ) {
        return {type : Types.REQUEST_FAILED, err : `内容不能为空，请输入内容`}
    }

    if (content && content.length < 15) {
        return {type : Types.REQUEST_FAILED, err : `内容字数少于15个字符`}
    }

    if (title && (title.length < 5 || title.length > 20)) {
        return {type : Types.REQUEST_FAILED, err : `标题字数必须介乎于5 - 20个字符之间`}
    }

    return {
        type : Types.FORM_VALUE_PUBLISH_REQUESTED,
        payload : Object.assign({...props,content,isComment}, (title ? {title} : {}) ),
    }
};

//Auth actions
const authLogout = () => ({
    type : Types.AUTH_LOGOUT,
});



export default {
    getFetchData,
    formDataOnChange,
    formToggleIsPosting,
    formLoginSubmit,
    authLogout,
    formValuePublish,
    // richDataOnChange
}