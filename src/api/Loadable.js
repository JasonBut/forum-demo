import Loadable from "react-loadable";
import Loading from "../Components/Loading";

export default function (Component) {
    return Loadable({
        loader : Component,
        loading : Loading,
    })
}