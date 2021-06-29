import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useFakeData } from '../../Context'
import { Post } from './Post'
import ContentLoader from 'react-content-loader'
import { useInView } from 'react-intersection-observer';
import {readyPosts} from "../Main/Index"

const InstagramStyle = props => (
    <ContentLoader viewBox="0 0 400 460" {...props}>
        <circle cx="31" cy="31" r="15" />
        <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
        <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="60" rx="2" ry="2" width="400" height="250" />
        <rect x="0" y="320" rx="2" ry="2" width="100%" height="12" />
        <rect x="0" y="340" rx="2" ry="2" width="100%" height="12" />
        <rect x="0" y="360" rx="2" ry="2" width="70%" height="12" />
    </ContentLoader>
)

const url_users = "https://randomuser.me/api/?inc=picture&results=200"
export const _array = (times) => [...Array(times)].fill(null)

export const PostsList = (): any => {
    const { dispatch, data: { posts, loading } } = useFakeData()
    const { ref, entry, inView } = useInView({ threshold: 0 })
    const [errorFetch, setErrorFetch] = useState(false)
    const [loadingLocal, setLoadingLocal] = useState(false)
    const newPosts = useRef(null)
    const userImages = useRef(null)

    const fetchPostsContent = async () => {
        const req = await fetch("https://my.api.mockaroo.com/posts.json?key=9b8b3fa0")
        const data = await req.json()
        newPosts.current = data
    }

    const fetchProfileImages = async () => {
        const req = await fetch(url_users)
        const _userImages = await req.json()
        userImages.current = _userImages.results
    }

    const shufflePosts = (posts, userImages) => {
        return posts.map((post, index) => ({
            ...post,
            userImage: userImages[index].picture.thumbnail,
            image_count: Math.floor(Math.random() * 4)
        }))
    }
    const fetchMorePosts = async () => {
        const paralelActions = [fetchPostsContent, fetchProfileImages].map(func => func())
        await Promise.all(paralelActions)
            .catch(err => { setErrorFetch(true) })
        return shufflePosts(newPosts.current, userImages.current)
    }

    // useEffect(() => {
    //     if (!loadingLocal) {
    //         const readyNewPosts = shufflePosts
    //     }
    // }, [])

    useEffect(() => {
        console.log(ref, entry, inView, "intersectiun")
        if (loading || loadingLocal) {
            return
        }
        if (inView) {
            setLoadingLocal(true)
            fetchMorePosts()
                .then(newPosts => dispatch({ type: "ADD_POSTS", payload: newPosts }))
                .then(() => setLoadingLocal(false))
                .catch(err => setErrorFetch(true))
        }
    }, [inView])

    if (loading) {
        return _array(3).map(() => <InstagramStyle />)
    }
    return <>{((posts as readyPosts[]).map(post =>
        <Post
            {...{ post }}
            key={post.id}
        />
    ))}
        {loadingLocal &&
            _array(2).map(() => <InstagramStyle />)}

        <div className="load-trigger"
            ref={ref}
        />
    </>
}



const FailedToLoad = () => {

}