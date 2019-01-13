import axios from "axios";

const URL = `http://localhost:4000/`;

//过滤条件
const filters = (rule,mode) => {
    //根据请求类型mode区分返回给asyncFetch函数的条件池
    //将不同的返回数据存在同一处, 增加独立性
    const pool = {
        post : new Map([
            ["post",`posts`],
            ["comment",`comments`],
            ["user",`users`],
        ]),

        get : new Map([
            ["boards",`boards`],
            ["posts",`posts?boardId=board_${rule}`],
            ["comments",`comments?postId=post_${rule}`],
            ["post",`posts/post_${rule}`],
            ["userid",`users/${rule}`],
            ["username",`users?username=${rule}`],
            ["nickname",`users?nickname=${rule}`],
            ["board",`boards/${rule}`],
            ["post_pool_id",`idPool/post`],
            ["user_pool_id",`idPool/user`],
            ["comment_pool_id",`idPool/comment`],
            ["board_pool_id",`idPool/board`],
        ]),

        put : new Map([
            ["post_pool_id",`idPool/post`],
            ["user_pool_id",`idPool/user`],
            ["comment_pool_id",`idPool/comment`],
            ["post",`posts/${rule}`],
            ["user",`users/${rule}`],
        ]),
    };
    return pool[mode];
};

/*
 * mode = "GET" / "POST" / "PUT" axios的get/post/put方法                         必须
 * type = 读取或发送的数据的类型, 如"boards","posts"等, 详细看filters的key       必须
 * rule = 读取数据时提供的id值或其他数据值,用于filters生成路径                   可选
 * body = 发送给服务器的数据内容                                                 可选
 */


//三个静态方法, 方便调用
asyncFetch.get = ({type, rule}) => asyncFetch({mode : "GET",type,rule});
asyncFetch.post = ({type, data}) => asyncFetch({mode : "POST",type,data});
asyncFetch.put = ({type, rule, data}) => asyncFetch({mode : "PUT",type, rule, data});


export default async function asyncFetch ({ mode, type, rule, data}) {
    if (typeof type !== "string") {
        throw new Error(`Invalid type: "${type}", excepted 'String'`);
    }

    const lowerCaseMode = mode && mode.toLowerCase();

  if (!(['get', 'post', 'put'].includes(lowerCaseMode))) {
    throw new Error(`Invalid mode : ${mode}, excepted "POST","GET" or "PUT"`);
  }

    let path = filters(rule,lowerCaseMode).get(type.toLowerCase());   //通过过滤函数获取路径

    if (!path) {
        throw new Error(`No path return from filter, please check the rule.`);
    }

    try {
        //这句代码是根据传入的参数去调整axios的get/post/put方法,并填入对应路径及数据
        const response = await axios[lowerCaseMode](`${URL}${path}`, data);
        path = null;    //解除filters引用

        if (!( response.status >= 200 && response.status < 300 )) {
            throw new Error(response.statusText);
        }

        return response.data;

    } catch (err) {
        throw new Error(err);
    }
}
