import { post } from "./utils";

export const getUser = () => new Promise((resolve, reject) => {

    if (!localStorage.getItem("token")) reject({ code: 401, message: "Invalid token" });

    post("/user", JSON.stringify({ token: localStorage.getItem("token") })).then((result) => {

        if (result.code === 200) {
            resolve(result);
        } else {
            if (result.code === 401) localStorage.removeItem("token");
            reject(result);
        }
    });
});

export const getOtherUser = (userId) => new Promise((resolve, reject) => {

    post("/user", JSON.stringify({ userId: userId })).then((result) => {

        if (result.code === 200) {
            resolve(result);
        } else {
            reject(result);
        }
    });
});

export const changeUsername = (newUsername) => new Promise((resolve, reject) => {

    if (!localStorage.getItem("token")) return { code: 401, message: "Invalid token" };

    post("/changeUsername", JSON.stringify({ token: localStorage.getItem("token"), newUsername: newUsername })).then((result) => {

        if (result.code === 200) {
            resolve(result);
        } else {
            if (result.code === 401) localStorage.removeItem("token");
            reject(result);
        }
    });
});

export const changeEmail = (newEmail) => new Promise((resolve, reject) => {

    if (!localStorage.getItem("token")) return { code: 401, message: "Invalid token" };

    post("/changeEmail", JSON.stringify({ token: localStorage.getItem("token"), newEmail: newEmail })).then((result) => {

        if (result.code === 200) {
            resolve(result);
        } else {
            if (result.code === 401) localStorage.removeItem("token");
            reject(result);
        }
    });
});

export const changeAvatar = (newAvatar) => new Promise((resolve, reject) => {

    if (!localStorage.getItem("token")) return { code: 401, message: "Invalid token" };

    post("/changeAvatar", JSON.stringify({ token: localStorage.getItem("token"), file: newAvatar })).then((result) => {

        if (result.code === 200) {
            resolve(result);
        } else {
            if (result.code === 401) localStorage.removeItem("token");
            reject(result);
        }
    });
});