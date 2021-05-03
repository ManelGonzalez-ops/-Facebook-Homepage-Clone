import React from 'react'
import { Post } from './Post'

export const PostsList = ({ posts }) => {

    return (posts.map(post =>
        <Post
            {...{ post }}
            key={post.id}
        />))
}
