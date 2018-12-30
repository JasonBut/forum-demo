import axios from "axios";

export default (params) => axios.get(`http://localhost:4000/${params}`)