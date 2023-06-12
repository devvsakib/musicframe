import axios from 'axios'

const api = axios.create({
    baseURL: "https://musicframe-backend.onrender.com/",
});

export default api;
