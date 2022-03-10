import axios from "axios"
const devUrl='http://localhost:4000/'
const token=localStorage.getItem('token');
const axiosInstance=axios.create({
    baseURL:devUrl,
    headers:{
        'Authorization':`Bearer ${token}`
    }
})

export default axiosInstance

