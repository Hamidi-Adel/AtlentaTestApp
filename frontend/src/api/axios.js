import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',  // Base URL for your Django API
});

export default API;