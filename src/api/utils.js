let globalData = "yoboData"

export function setGlobalUserInfo(userInfo) {
    window[globalData] = window[globalData] || {};
    window[globalData].userInfo = userInfo;
}

export function getGlobalUserInfo() {
    window[globalData] = window[globalData] || {};
    return window[globalData].userInfo || false;
}

export function removeGlobalUserInfo() {
    window[globalData] = window[globalData] || {};
    window[globalData] = undefined;
}


export function setToken(token) {
    localStorage.setItem('token', token);
}

export function getToken() {
    let token = localStorage.getItem('token')
    if (token && token.length > 0) {
        return token;
    }
    else {
        return false;
    }
}

export function removeToken() {
    localStorage.removeItem('token')
}

export function getGlobalData() {
    window[globalData] = window[globalData] || {}
    return window[globalData]
}

export function setUserId(userId) {
    localStorage.setItem('userId', userId)
}
export function getUserId() {
    let userId = localStorage.getItem('userId')
    if (userId && userId.length > 0) {
        return userId;
    }
    else {
        return false;
    }
}