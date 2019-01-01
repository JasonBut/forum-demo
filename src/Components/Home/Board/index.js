import React from "react";
import "./board.less";
import {FetchDataHOC} from "../../Commons";
import BoardView from "./UI/BoardUI";

const Board = FetchDataHOC(BoardView,"boards");

export default () => (
    <Board />
)