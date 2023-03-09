import { useEffect, useState } from 'react'
import { followApi } from '../../../assets/api/api'
import './style.scss'
import load from '../../../assets/img/followLoad.gif'

const RecItem = ({ data, isPage }) => {
    const [userData, setUserData] = useState(data)
    const [isLoad, setIsLoad] = useState(false)


    useEffect(() => {
        console.log(isLoad);
    }, [isLoad])
    const handleFollow = () => {
        const { id, deleteId, is_followed } = userData
        setIsLoad(true)
        if (is_followed) {
            followApi.unfollowing(deleteId)
                .then(() => {
                    setUserData(prevState => ({ ...prevState, is_followed: false }))
                    setIsLoad(false)
                })
        } else {
            followApi.following(id)
                .then(response => {
                    const updatedUserData = { ...userData, is_followed: true, deleteId: response.data.id }
                    setUserData(updatedUserData)
                    setIsLoad(false)
                })
        }
    }

    return (
        <div className="rec__item">
            <div className="rec__info">
                <div className="rec__item-img">
                    <img src="https://avatars.mds.yandex.net/i?id=5015c8c019f583020415f97b60b1479429fd9efa-9181298-images-thumbs&n=13" className='rec__image' alt="ava" />
                    {userData.is_online && <div className="rec__online"></div>}
                </div>
                <div className="rec__con">
                    <p className="rec__name">{userData.username}</p>
                    <div className="rec__followers">Followers: {userData.subscribers}</div>
                </div>
            </div>
            <button onClick={handleFollow} className={`rec__btn ${!isPage ? 'rec__btn-component' : 'rec__btn-page'} ${isPage && userData.is_followed && 'rec__btn-page-active'} ${!isPage && userData.is_followed && 'rec__btn-component-active'}`}>
                {isLoad ? <img src={load} alt="Loading" className='rec__load' />
                    : (
                        userData.is_followed ? <p className='rec__unfollow'>Unfollow</p> : <p className='rec__follow'>Follow</p>
                    )}
            </button>
        </div>
    )
}

export default RecItem

