import Loadable from "react-loadable";
import {Loading} from "../../Components/Commons/";

export default (Component) => {
    return Loadable({
        loader : Component,
        loading : Loading,
    })
}