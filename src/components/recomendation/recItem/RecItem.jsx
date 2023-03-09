import { useState } from 'react'
import { followApi } from '../../../assets/api/api'
import './style.scss'

const RecItem = ({ data }) => {
    const [userData, setUserData] = useState(data)

    const handleFollow = () => {
        const { id, deleteId, is_followed } = userData
        if (is_followed) {
            followApi.unfollowing(deleteId)
                .then(() => setUserData(prevState => ({ ...prevState, is_followed: false })))
        } else {
            followApi.following(id)
                .then(response => {
                    const updatedUserData = { ...userData, is_followed: true, deleteId: response.data.id }
                    setUserData(updatedUserData)
                })
        }
    }

    return (
        <div className="rec__item">
            <div className="rec__info">
                <img src="https://avatars.mds.yandex.net/i?id=5015c8c019f583020415f97b60b1479429fd9efa-9181298-images-thumbs&n=13" alt="ava" />
                <div className="rec__con">
                    <p className="rec__name">{userData.username}</p>
                    <div className="rec__followers">Followers: {userData.subscribers}</div>
                </div>
            </div>
            <button onClick={handleFollow} className="rec__btn">
                {userData.is_followed ? <p className='rec__unfollow'>unfollow</p> : <p className='rec__follow'>follow</p>}
            </button>
        </div>
    )
}

export default RecItem

