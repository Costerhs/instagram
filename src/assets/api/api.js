import axios from "axios";
import { changeObjToForm, setLocal } from "../defFunction/defFunction";

const instance = axios.create({
    baseURL: `https://cryxxxen.pythonanywhere.com/`
});
// let header = { Authorization: `Bearer ${localStorage.getItem("token")}` }



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
    getUser(id) {
        return instance.get(`/users/${id}/`)
    },
    refreshToken() {
        let refresh = localStorage.getItem('refresh')
        let obj = {
            'refresh': refresh
        }
        return instance.post('token/refresh/', obj)
    }
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
export const getUser = (setUser, id) => {
    Promise.all([usersApi.getUser(id), followApi.getFollowing()])
        .then(([userObj, followObj]) => {
            //беру пользователя и данные из моих подписок и по условию если я на него подписан то добавляю свойсвто deleteId чтобы работал запрос для отписки
            let userArr = userObj.data;
            let followArr = followObj.data;
            let isFollow = followArr.find(followEl => userArr.id === followEl.to_user)
            if (isFollow) {
                userArr = { ...userArr, deleteId: isFollow.id }
            }
            setUser(userArr)
        })
}
export const postApi = {
    getPostOfUser(id) {
        //нету запроса чтобы получить посты опредленного пользователя
        //поэтому беру все посты и отфильтроваываю чтобы остались посты определенного пользователя
        return instance.get(`posts/`)
            .then(res => {
                return res.data.filter(data => data.user == id)
            })
    }
}







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
            usersApi.refreshToken()
                .then(el => {
                    setLocal("access", el.data.access)
                })
            console.log("Ошибка 403: недостаточно прав для выполнения операции");
        }
        return Promise.reject(error);
    }
);