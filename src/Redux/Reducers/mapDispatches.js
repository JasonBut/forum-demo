import Types from "../ActionsTypes";

//Actions Creators
//UI actions
const fetchData = (filter) => {
    let action = {type : Types.UI_FETCH_REQUESTED};

    //如果filter返回有效信息, 将结果混入action中,否则直接发送action
    return Object.assign(action, ( filter ? { params : filter } : null) );
};

//Form actions
const formDataOnChange = (event) => {
    const {name,value} = event.target;
    return {
        type : Types.FORM_VALUE_ONCHANGE,
        payload : {
            name,
            value,
        }
    }
};

const formLoginSubmit = (event) => {
    event.preventDefault();
    const {loginUsername, loginPassword} = event.target;
    return {
        type : Types.AUTH_LOGIN_REQUESTED,
        params : {
            username : loginUsername.value,
            password : loginPassword.value,
        }
    }
};

const formToggleIsEditing = (isPosting) => {
    return {
        type : Types.FORM_TOGGLE_POSTING,
        isPosting : !isPosting,
    }
};

const formValuePublish = () => {
    return {
        type : Types.FORM_VALUE_PUBLISH_REQUESTED,
        // payload : {
        //     name,
        //     value,
        // }
    }
};

//Auth actions
const authLogout = function () {
    return {
        type : Types.AUTH_LOGOUT
    }
};



export default {
    fetchData,
    formDataOnChange,
    formToggleIsEditing,
    formLoginSubmit,
    authLogout,
    formValuePublish,
}