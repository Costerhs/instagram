import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { followApi, usersApi } from '../../assets/api/api';
import load from '../../assets/img/followLoad.gif'
import PostList from './post/PostList';
import './style.scss'
import avatar from '../../assets/img/avatar.jpg'

const User = () => {
    const [user, setUser] = useState();
    const userId = useParams().id
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        usersApi.getUser(userId)
            .then(el => {
                setUser(el.data);
            })
    }, [])

    const handleFollow = () => {
        const { id, deleteId, is_followed } = user
        setIsLoad(true)
        if (is_followed) {
            followApi.unfollowing(deleteId)
                .then(() => {
                    setUser(prevState => ({ ...prevState, is_followed: false }))
                    setIsLoad(false)
                })
        } else {
            followApi.following(id)
                .then(response => {
                    const updatedUser = { ...user, is_followed: true, deleteId: response.data.id }
                    setUser(updatedUser)
                    setIsLoad(false)
                })
        }
    }

    return user && (
        <div className='user'>
            <div className="user__top">
                <div className="user__img">
                    <img src={user.avatar || avatar} alt="ava" />
                </div>
                <div className='user__data'>
                    <div className="user__action">
                        <p className="user__name">{user.username}</p>
                        <button onClick={handleFollow} className={`user__btn ${user.is_followed ? 'user__btn-active' : 'user__btn-passive'}`}>
                            {isLoad ? <img src={load} alt="Loading" className='rec__load' />
                                : (
                                    user.is_followed ? <p className='user__unfollow'>Unfollow</p> : <p className='user__follow'>Follow</p>
                                )}
                        </button>
                    </div>
                    <div className="user__info">
                        <p className="user__subs">
                            <span>{user.subscriptions}</span> subscriptions
                        </p>
                        <p className="user__subs">
                            <span>{user.subscribers}</span> subscribers
                        </p>
                    </div>
                    <p className="user__firstname">
                        {user.first_name}
                    </p>
                </div>
            </div>
            {/* <PostList id={userId} /> */}
        </div>
    );
}

export default User