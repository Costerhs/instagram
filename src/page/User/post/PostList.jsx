import React, { useEffect, useState } from 'react'
import { postApi } from '../../../assets/api/api'
import './style.scss'
const PostList = ({ id }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postApi.getPostOfUser(id)
            .then(el => {
                setPosts(el)
                console.log(el[0].post_images[0].image);
            })
    }, [])

    useEffect(() => {
        console.log(posts.length);
    }, [posts])
    return (
        <div className='postList'>
            {posts.length >= 1 ? posts.map((el, ind) => {
                return <div className="postList__item">
                    <img src={el.post_images[0].image} alt="post" className="postList__img" />
                    <div className="postList__back">
                        <div className="postList__followers"></div>
                        <div className="postList__liked">
                            {el.liked.length}
                        </div>
                    </div>
                </div>
            }) : <div className="postList__empty">
                0 publication</div>}
        </div>
    )
}

export default PostList