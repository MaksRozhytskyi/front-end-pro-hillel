import axiosInstance from './axiosInstance';

export const fetchHotelsApi = () => axiosInstance.get('/hotels');
