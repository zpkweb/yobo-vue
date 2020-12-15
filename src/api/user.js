import axios from 'axios'

axios.defaults.baseURL = "http://192.168.0.67:7001"

export function register(name, email, phone, password) {
    return axios.post(
        "/api/user/register",
        {
            "name": name,
            "email": email,
            "phone": phone,
            "password": password
        },
    )
}

export function login(email, phone, password) {
    return axios.post(
        "/api/user/login",
        {
            "email": email,
            "phone": phone,
            "password": password
        }
    )
}


export function getUserInfo(userId) {
    return axios.get(
        `/api/user/self?userId=${userId}`
    )
}