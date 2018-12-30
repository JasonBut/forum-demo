import Types from "../ActionsTypes";

//Actions Creator
//UI actions
const fetchDataAction = function (filter) {
    //根据type类型获取相应的action类型
    let action = {
        type : Types.UI_FETCH_REQUESTED,
    };
    //如果filter有正确的返回信息,则将结果混入action中,否则直接发送action
    if (filter !== undefined) {
        return {
            ...action,
            params : filter,
        }
    }
    return action;
};

export default {
    fetchDataAction,
}