import axios from 'axios'
import * as utils from "@/api/utils.js"

axios.defaults.baseURL = "http://81.70.62.235:7001"

axios.defaults.headers.common['Authorization'] = 'Bearer ' + utils.getToken()


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

export function getVerifyCode(userId, email) {
    return axios.post(
        "/api/user/password/retrieve/code/send",
        {
            "userId": userId,
            "email": email
        }
    )
}

export function sendVerifyCode(userId, verifyCode) {
    return axios.post(
        "/api/user/password/retrieve/code/verify",
        {
            "userId": userId,
            "code": verifyCode
        }
    )
}

export function setNewPassword(userId, email, phone, password) {
    return axios.post(
        "/api/user/change/password",
        {
            "userId": userId,
            "email": email,
            "phone": phone,
            "password": password
        }
    )
}