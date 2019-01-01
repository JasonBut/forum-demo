import axios from "axios";

//过滤条件
let filters = (rule) => new Map([
    ["boards",`boards`],
    ["posts",`posts?boardId=board_${rule}`],
    ["comments",`comments?postId=post_${rule}`],
    ["post",`posts/post_${rule}`],
    ["userid",`users/${rule}`],
    ["username",`users?username=${rule}`]
]);

export default async ({type,rule}) => {
    if (typeof type !== "string") {
        return new Error(`Invalid type: "${type}", excepted 'String'`)
    }

    const path = filters(rule).get(type.toLowerCase());

    try {
        const response = await axios.get(`http://localhost:4000/${path}`);
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;

    } catch (err) {
        throw new Error(err)
    }
}
