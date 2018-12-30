import axios from "axios";

export default async (id) => {
    if (!id) {
        return new Error(`Function requires a userID argument.`)
    }
    try {
        const fetchData = await axios.get(`http://localhost:4000/users/${id}`);
        if (fetchData && fetchData.status === 200) {
            return fetchData.data.nickName;
        }
    } catch (err) {
        throw new Error (`Cannot found ${id} in database`);
    }
}