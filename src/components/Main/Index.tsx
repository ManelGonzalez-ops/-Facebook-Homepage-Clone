import React, { useEffect, useRef, useState } from 'react'
import { useFakeData } from '../../Context'
import fakeposts from "../../Mock_posts.json"

export const url_users = "https://randomuser.me/api/?inc=picture&results=200"
const posts_url = "https://api.mockaroo.com/api/bab131a0?count=150&key=9b8b3fa0"
const urls_images = "https://source.unsplash.com/random"

export interface readyPosts {
    userImage: any;
    id: any;
    text: string;
    text2: string;
    full_name: string;
    image_count: number,
    date: number
}
export const useDummyData = () => {
    const {dispatch} = useFakeData()
    const [readyData, setReadyData] = useState<readyPosts[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [fetchingReady, setFetchingReady] = useState(false)
    const posts = useRef(null)
    const userImages = useRef(null)

    const fetchThumbnails = async () => {
        setLoading(true)
        const req = await fetch(url_users)
        const _userImages = await req.json()
        userImages.current = _userImages.results
    }
    const fetchPosts = async () => {
        setLoading(true)
        const req = await fetch(posts_url)
        const _posts = await req.json()
        posts.current = _posts
        //return userPost.results
    }
    const fetchData = async () => {
        const promiseArr = [fetchThumbnails, fetchPosts].map(fun => fun())
        await Promise.all(promiseArr)
        setFetchingReady(true)

    }
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (fetchingReady) {
            completePosts()
        }
    }, [fetchingReady])
    const shufflePosts = (posts, userImages) => {
        return posts.map((post, index) => ({
            ...post,
            userImage: userImages[index].picture.thumbnail, 
            image_count: Math.floor(Math.random() * 4)
        }))
    }
    const completePosts = async () => {
        try {
            const readyPosts = shufflePosts(posts.current, userImages.current)
            dispatch({type: "SET_INIT_DATA", payload: readyPosts})
            //setLoading(false)

        } catch (err) {
            throw err
        }
    }
   
}
