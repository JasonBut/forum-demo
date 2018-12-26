import React,{Suspense} from "react";

const Header = React.lazy(() => import("../Components/Header"));
const Board = React.lazy(() => import("./Board"));
const Footer = React.lazy(() => import("../Components/Footer"));


export default function () {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Header />
            <Board />
            <Footer />
        </Suspense>
    )
}