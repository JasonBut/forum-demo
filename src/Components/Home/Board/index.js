import React from "react";
import "./board.less";
import {Lazy} from "../../../Utils"

const Board = Lazy(() => import("./Containers/Board"));


export default function () {
    return (
        <Board />
    )
}