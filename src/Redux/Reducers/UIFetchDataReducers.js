import Types from "../ActionsTypes"

//初始State
const initialState = {
    list : [],
    post : {},
    err : null,
};


//Actions Creator
export const fetchDataAction = function (type,filter) {
    if (typeof type !== 'string') {
        return new Error(`Invalid type for fetch action, excepted "String`);
    }
    //统一type格式
    const lowerCaseType = type.toLowerCase();
    if (lowerCaseType !== "post" && lowerCaseType !== "list") {
        return new Error(`Invalid type for fetch action, should only "Post" or "List"`);
    }
    //根据type类型获取相应的action类型
    let action = {
        type : Types.FETCH_REQUESTED,
    };
    //如果filter有正确的返回信息,则将结果混入action中,否则直接发送action
    if (filter !== undefined) {
        return {
            ...action,
            params : filter,
            mode : lowerCaseType,
        }
    }
    return action;
};


//Reducers
export default function UIReducer (state = initialState, action) {
    switch (action.type) {
        case  Types.FETCH_FAILED :
            console.log(action.err);
            return {...state, err : action.err};

        case Types.FETCH_LIST_SUCCEEDED :
            return {...state, list : action.data};

        case Types.FETCH_POST_SUCCEEDED :
            return {...state, post : action.data};

        default :
            return state;
    }
}