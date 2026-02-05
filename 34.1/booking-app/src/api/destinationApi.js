import axiosInstance from './axiosInstance';

export const fetchDestinationsApi = () => axiosInstance.get('/destination');
