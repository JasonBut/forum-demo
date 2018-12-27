import React from "react";
import BoardView from "../UI/Board-view";

const boards = [
    {
        "id": "board_1",
        "boardName": "JavaScript",
        "boardDesc": "Board 1"
    },
    {
        "id": "board_2",
        "boardName": "React",
        "boardDesc": "Board 2"
    }
];

export default () => {
    return (
        <BoardView boards={boards} />
    )
}