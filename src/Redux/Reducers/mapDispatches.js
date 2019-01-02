import Types from "../ActionsTypes";

//Actions Creators
//UI actions

//filter 结构
// {
//   type : type,
//   rule : this.props.match.params.id,
// }
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
const formDataOnChange = (event) => {
    const { name,value } = event.target;
    return {
        type : Types.FORM_VALUE_ONCHANGE,
        payload : { name, value,}
    }
};

const formLoginSubmit = (event) => {
    event.preventDefault();
    const {loginUsername, loginPassword} = event.target;
    const username = loginUsername.value;
    const password = loginPassword.value;

    //检查提交的用户名和密码是否为空
    if (!username || !password) {
        return {type : Types.REQUEST_FAILED, err : `请输入用户名和密码`};
    }

    return {
        type : Types.AUTH_LOGIN_REQUESTED,
        payload : { username, password }
    }
};

const formToggleIsPosting = (isPosting) => ({
    type : Types.FORM_TOGGLE_POSTING,
    isPosting : !isPosting,
});


//  payload 结构
// {
//     authorId : "user_1"
//     isComment: false
//     mode : "post"
//     pathId : "1"
//     title : "a"
//     value : "a"
// }
const formValuePublish = (payload) => {
    const {title, value: content, isComment,...props} = payload;

    //校检内容
    if ( (isComment && !content) || (!isComment && (!content || !title)) ) {
        return {type : Types.REQUEST_FAILED, err : `内容不能为空，请输入内容`}
    }

    if ( (content && content.length < 15) || (title && title.length < 15) ) {
        return {type : Types.REQUEST_FAILED, err : `字数少于15个字符`}
    }

    return {
        type : Types.FORM_VALUE_PUBLISH_REQUESTED,
        payload : Object.assign({...props,content,isComment}, (title ? {title} : {}) )
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
}