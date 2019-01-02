import Types from "../ActionsTypes";

//Actions Creators
//UI actions
const getFetchData = (filter) => {
    //如果filter返回有效信息, 将结果混入action中,否则直接发送action
    let action = {type : Types.UI_FETCH_REQUESTED};
    return Object.assign(action, ( filter ? { payload : filter } : {}) );
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

// {
//     "id": "comment_2",
//     "postId": "post_2",
//     "userId": "user_4",
//     "content": "fuck you asshole",
//     "commentDate": "2019/1/2 下午1:40:24"
// },
// {
//     "userId": "user_1",
//     "boardId": "board_1",
//     "id": "post_1",
//     "title": "Post 1",
//     "postDate": "2019/1/2 下午1:40:24",
//     "content": "asdiashkdjklasjdkljaskl"
// },



const formValuePublish = (payload) => {
    console.log(payload);
    const {title,value,isComment} = payload;

    //校检内容, 评论模式下允许title为空
    if ( (isComment && !value) || (!value || !title) ) {
        return {type : Types.REQUEST_FAILED, err : `内容不能为空，请输入内容`}
    }
    
    return {
        type : Types.FORM_VALUE_PUBLISH_REQUESTED,
        // payload : {
        //     name,
        //     value,
        // }
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