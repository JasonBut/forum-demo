export default {
    FETCH_START : 'FETCH_START',                                                //获取数据请求开始
    REQUEST_FAILED : "REQUEST_FAILED",                                          //获取数据失败
    FETCH_SUCCEEDED : 'FETCH_SUCCEEDED',                                        //获取数据成功

    UI_FETCH_REQUESTED : "UI_FETCH_REQUESTED",                                  //发起UI数据请求 saga-only
    UI_FETCH_LIST_SUCCEEDED : "UI_FETCH_LIST_SUCCEEDED",                        //列表获取成功
    UI_FETCH_POST_SUCCEEDED : "UI_FETCH_POST_SUCCEEDED",                        //文章获取成功

    AUTH_LOGIN_REQUESTED : "AUTH_LOGIN_REQUESTED",                              //发起登录请求 saga-only
    AUTH_LOGIN_SUCCEEDED : "AUTH_LOGIN_SUCCEEDED",                              //登录成功
    AUTH_LOGIN_FAILED : "AUTH_LOGIN_FAILED      ",                              //登录失败
    AUTH_LOGOUT : "AUTH_LOGOUT",                                                //注销

    FORM_VALUE_ONCHANGE : "FORM_VALUE_ONCHANGE",                                //表单文本框内容变更
    FORM_TOGGLE_POSTING : "FORM_TOGGLE_POSTING",                                //切换编辑状态
    FORM_VALUE_PUBLISH_REQUESTED : "FORM_VALUE_PUBLISH_REQUESTED",              //发起发表文章/评论请求
    // FORM_VALUE_PUBLISH_SUCCEEDED : "FORM_VALUE_PUBLISH_SUCCEEDED",              //发表文章/评论成功
}