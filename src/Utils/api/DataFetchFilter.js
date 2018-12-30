export default ({type,id}) => {
    if (typeof type !== "string") {
        return new Error("Invalid type for 'Type', excepted 'String'")
    }
    const lowerCaseType = type.toLowerCase();
    switch (lowerCaseType) {
        case "boards" :
            return `boards`;

        case "posts" :
            return `posts?boardId=board_${id}`;

        case "comments" :
            return `comments?postId=post_${id}`;

        case "post" :
            return `posts/post_${id}`;

        default :
            return new Error(`Invalid type for data filter`);
    }
};