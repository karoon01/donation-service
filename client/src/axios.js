import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem(
        'accessToken'
    )}`;
    return config;
});

export default instance;
