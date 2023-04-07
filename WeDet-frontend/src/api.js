import axios from "axios";

const api = axios.create({
    baseURL: "https://fastapi-production-2594.up.railway.app",
});

export const predictImage = async (query) => {
    try {
        const res = await api.post('/path', { msg: query });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}