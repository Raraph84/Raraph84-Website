export const login = async (username, password) => new Promise((resolve, reject) => {

    fetch(process.env.REACT_APP_API_HOST + "/login", {
        method: "POST",
        body: JSON.stringify({ username, password })
    }).then((res) => {
        if (res.ok) res.json().then((res) => resolve(res.token)).catch((error) => reject(error));
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const createAccountP1 = async (email) => new Promise((resolve, reject) => {

    fetch(process.env.REACT_APP_API_HOST + "/users", {
        method: "POST",
        body: JSON.stringify({ email })
    }).then((res) => {
        if (res.ok) resolve();
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const createAccountP2 = async (code, username, password) => new Promise((resolve, reject) => {

    fetch(process.env.REACT_APP_API_HOST + "/users", {
        method: "POST",
        body: JSON.stringify({ code, username, password })
    }).then((res) => {
        if (res.ok) res.json().then((res) => resolve(res.token)).catch((error) => reject(error));
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const logout = async () => new Promise((resolve, reject) => {

    fetch(process.env.REACT_APP_API_HOST + "/logout", {
        method: "POST",
        headers: { authorization: localStorage.getItem("token") }
    }).then(async (res) => {
        if (res.ok) resolve();
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const getUser = async (user) => new Promise((resolve, reject) => {

    fetch(process.env.REACT_APP_API_HOST + "/users/" + user, {
        method: "GET",
        headers: { authorization: localStorage.getItem("token") }
    }).then(async (res) => {
        if (res.ok) res.json().then((res) => {
            const user = { ...res };
            delete user.code;
            resolve(user);
        }).catch((error) => reject(error));
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const getHebergs = async () => new Promise((resolve, reject) => {

    fetch(process.env.REACT_APP_API_HOST + "/hebergs", {
        method: "GET",
        headers: { authorization: localStorage.getItem("token") }
    }).then(async (res) => {
        if (res.ok) res.json().then((res) => resolve(res.hebergs)).catch((error) => reject(error));
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const getHeberg = async (hebergId) => new Promise((resolve, reject) => {

    fetch(process.env.REACT_APP_API_HOST + "/hebergs/" + hebergId, {
        method: "GET",
        headers: { authorization: localStorage.getItem("token") }
    }).then(async (res) => {
        if (res.ok) res.json().then((res) => {
            const heberg = { ...res };
            delete heberg.code;
            resolve(heberg);
        }).catch((error) => reject(error));
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});
