import axios from 'axios'

const api = axios.create({
    baseURL: "https://musicframe-backend.onrender.com/",
    // baseURL: "http://localhost:5000/",
});

export default api;
