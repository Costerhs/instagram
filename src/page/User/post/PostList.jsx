import React, { useEffect, useState } from 'react'
import { postApi } from '../../../assets/api/api'

const PostList = ({ id }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postApi.getPostOfUser(id)
            .then(el => {
                setPosts(el)
                console.log(el[0].post_images[0].image);
            })
    }, [])
    return (
        posts.length >= 1 && <div className='postList'>
            {posts.map((el, ind) => {
                <div className="postList__item">
                    <img src={el.post_images[0].image} alt="post" className="postList__img" />
                </div>
            })}
        </div>
    )
}

export default PostList