import axios from "axios";
import { changeObjToForm } from "../defFunction/defFunction";

const instance = axios.create({
    baseURL: `https://cryxxxen.pythonanywhere.com/`
});
// let header = { Authorization: `Bearer ${localStorage.getItem("token")}` }

instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("access");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        if (error.response && error.response.status === 403) {
            // перенаправить на другую страницу
            console.log("Ошибка 403: недостаточно прав для выполнения операции");
        }
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 403) {
            // перенаправить на другую страницу
            console.log("Ошибка 403: недостаточно прав для выполнения операции");
        }
        return Promise.reject(error);
    }
);

export const usersApi = {
    register(data) {
        console.log(data);
        data.avatar = data.avatar[0]
        const newFormData = changeObjToForm(data)
        return instance.post('users/', newFormData)
    },
    token(data) {
        return instance.post('token/', data)
    },
    getUsers() {
        return instance.get('users/')
    },
    // getUser(id) {
    //     return instance.get(`/users/${id}/`)
    // }
}

export const followApi = {
    following(id) {
        let data = {
            to_user: id
        }
        // console.log(header);
        return instance.post('follow/', data)
    },
    unfollowing(id) {
        return instance.delete(`follow/${id}/`)
    },
    getFollowing() {
        return instance.get(`users/${localStorage.getItem('id')}/subscriptions/`)
    }
}

export const getUsers = (setUsers, isPage) => {
    Promise.all([usersApi.getUsers(), followApi.getFollowing()])
        .then(([usersObj, followObj]) => {
            let usersArr = usersObj.data;
            let followArr = followObj.data;
            usersArr = usersArr.filter(user => !followArr.some(followEl => user.id === followEl.to_user));
            if (!isPage) {
                usersArr = usersArr.slice(0, 6);
            }
            setUsers(usersArr);
        })
}