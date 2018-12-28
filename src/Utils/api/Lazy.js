import Loadable from "react-loadable";
import {Loading} from "../../Components/Commons/";

export default function (Component) {
    return Loadable({
        loader : Component,
        loading : Loading,
    })
}