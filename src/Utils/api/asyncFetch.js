import axios from "axios";

//过滤条件
const filters = (rule,mode) => {
    //根据请求类型分隔返回路径信息的条件池, 尝试避免将不同的返回数据存在同一处, 增加独立性
    return mode === "post"
        ? new Map([
            ["post",`posts`],
            ["comment",`comments`],
            ["user",`users`],
          ])

        : new Map([
            ["boards",`boards`],
            ["posts",`posts?boardId=board_${rule}`],
            ["comments",`comments?postId=post_${rule}`],
            ["post",`posts/post_${rule}`],
            ["userid",`users/${rule}`],
            ["username",`users?username=${rule}`],
          ]);
};

/*
 * mode = "GET" / "POST" axios的get/post方法
 * type = 读取或发送的数据的类型, 如"boards","posts"等, 详细看filters的key
 * rule = 读取数据时提供的id值或其他数据值,用于filters生成路径
 * body = 发送给服务器的数据内容
 */

export default async ({ mode, type, rule, data}) => {
    if (typeof type !== "string") {
        throw new Error(`Invalid type: "${type}", excepted 'String'`);
    }

    let lowerCaseMode = mode && mode.toLowerCase();

    if (lowerCaseMode !== "post" && lowerCaseMode !== "get") {
        throw new Error(`Invalid mode : ${mode}, excepted "POST" or "GET"`);
    }

    const path = filters(rule,lowerCaseMode).get(type.toLowerCase());   //通过过滤函数获取路径

    if (!path) {
        throw new Error(`No path return from filter, please check the rule.`);
    }

    try {
        //这句代码是根据传入的参数去调整axios的get/post方法,并填入对应路径及数据
        let response = await axios[lowerCaseMode](`http://localhost:4000/${path}`, data);

        if (!( response.status >= 200 && response.status < 300 )) {
            throw new Error(response.statusText);
        }
        return response.data;

    } catch (err) {
        throw new Error(err);
    }
}