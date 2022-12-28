import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('refreshToken');
    return config;
});

export default instance;
