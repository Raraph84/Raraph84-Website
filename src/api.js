export const HOST = "https://api.raraph.fr";

export const login = async (username, password) => new Promise((resolve, reject) => {

    fetch(HOST + "/login", {
        method: "POST",
        body: JSON.stringify({ username, password })
    }).then((res) => {
        if (res.ok) res.json().then((res) => resolve(res.token)).catch((error) => reject(error));
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const createAccount = async (username, email, password, acceptCgu) => new Promise((resolve, reject) => {

    fetch(HOST + "/createAccount", {
        method: "POST",
        body: JSON.stringify({ username, email, password, acceptCgu })
    }).then((res) => {
        if (res.ok) res.json().then((res) => resolve(res.token)).catch((error) => reject(error));
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const logout = async () => new Promise((resolve, reject) => {

    fetch(HOST + "/logout", {
        method: "POST",
        headers: { authorization: localStorage.getItem("token") }
    }).then(async (res) => {
        if (res.ok) resolve();
        else res.json().then((res) => reject(res.message)).catch((error) => reject(error));
    }).catch((error) => reject(error));
});

export const getUser = async (user) => new Promise((resolve, reject) => {

    fetch(HOST + "/users/" + user, {
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