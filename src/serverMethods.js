import axios from 'axios'
import { API_URL } from './App';
    


export const baseApi = axios.create({
    baseURL: 'http://localhost:4000/api/'
});
