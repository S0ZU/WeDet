import axios from "axios";

const api = axios.create({
    baseURL: "https://fastapi-production-5d4f.up.railway.app",
});

export const predictImage = async (query) => {
    try {
        const res = await api.post('/path', { msg: query });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}