import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ListItemBig } from '../list-items/ListItemBig'
import { TextNotification } from '../text-items/TextMultiline'
import { FiMoreHorizontal } from "react-icons/fi"
import { ActionButton } from '../ActionBlock/ActionButton'
import { readyPosts } from "../Main/Index";
import { time_ago } from '../Utils/time_ago'
import { useViewport } from '../Utils/useViewport'
import styled from "styled-components"
//import ReactPhotoGrid from 'react-photo-grid'
//import FbImageLibrary from "react-fb-image-grid";

const src = "https://source.unsplash.com/random"
interface Post {
    post: readyPosts
}

export const Post: React.FC<Post> = ({ post }) => {
    console.log(post.id)
    const postRef = useRef<any>(null)
    const [width] = useViewport()
    const [postWidth, setPostWidth] = useState("")
    useEffect(() => {
        if (postRef.current) {
            setPostWidth(postRef.current.getBoundingClientRect().width)
        }
    }, [width])
    const photos = useMemo(() => Array(3).fill(0).map((_, index) => src + "?sig=" + Math.random() * 9999999999), [])
    return (
        <div
            ref={postRef}
            className="post dynamic-border"
        >
            <div
                className="post__header"
            >
                <ListItemBig
                    renderText={() => <TextNotification
                        text={post.full_name}
                        footer={time_ago(post.date)}
                    />}
                    type="image"
                    image={<img src={post.userImage}
                        className="listItem__image--md"
                    />}
                    customStyles={{ height: "auto", padding: "0", border: "none" }}
                    endIcon={<FiMoreHorizontal className="icon--centered"
                        style={{ fontSize: "24px" }}
                    />}
                >
                </ListItemBig>
            </div>
            <div
                className="post__content"
            >
                {post.text}

            </div>

            {/* <div style={{ maxHeight: "500px" }}>
                {!!post.image_count &&
                    <FbImageLibrary images={photos}
                        hideOverlay={true}
                    />
                }
            </div> */}
            <div
                className="post__info"
            >
                <div className="post__info-likes">5</div>
                <div className="post__info-answers">3 Answers</div>
            </div>
            <div
                className="post__actions"
            >
                <div
                    className="actionBlock__actions--underlined"
                >
                    <ActionButton
                        text="M'agrada"
                        customStyles={{ paddingLeft: "12px", paddingRight: "12px" }}
                    />
                    <ActionButton
                        text="Comenta"
                        customStyles={{ paddingLeft: "12px", paddingRight: "12px" }}
                    />
                </div>
            </div>
        </div>
    )
}



const Grid = styled.div(props => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${props.parentWidth / props.imageCount}px, 1fr))`,
    gridTemplateRows: `repeat(auto-fit, ${props.parentWidth / props.imageCount}px)`,
    gridAutoFlow: "dense",
    gap: "0.3rem",
    maxHeight: "500px"
}))

interface gallerie {
    imageCount: number
    parentWidth: number
}
// const Gallerie: React.FC<gallerie> = ({ imageCount, parentWidth }) => {

//     const [images, setImages] = useState<any[]>([])
//     const template = [
//         { height: "500", width: "250" },
//         { height: "250", width: "250" },
//         { height: "250", width: "250" },
//     ]
//     const generateMetadata = () => {
//         let imagesMeta: any[] = []
//         console.log(parentWidth, "parentWidth")
//         Array(imageCount).fill("").forEach(_ => {
//             imagesMeta = [...imagesMeta,
//             {
//                 height: Math.round(Math.random() * parentWidth),
//                 width: Math.round(Math.random() * parentWidth)
//             }]
//         })
//         console.log(imagesMeta, "PUUTA")
//         setImages(imagesMeta)
//     }

//     useEffect(() => {
//         generateMetadata()
//     }, [parentWidth])
//     if (typeof parentWidth !== "number") {
//         return <p>loading</p>
//     }
//     return (
//         <Grid
//             parentWidth={parentWidth}
//             imageCount={imageCount}
//         >
//             {images.map(metadata => {
//                 return <Image
//                     {...{ metadata }}
//                 />
//             })}
//         </Grid>
//     )

// }

// const Image = ({ metadata }) => {
//     const { height, width } = metadata
//     const src = `https://source.unsplash.com/random/${width}x${height}`
//     const style = {
//         gridColumnEnd: `span ${getSpanStimate(width)}`,
//         gridColumnRow: `span ${getSpanStimate(height)}`,
//         height: "100%",
//         width: "100%",
//         objectFit: "cover" as any
//     }
//     function getSpanStimate(size) {
//         return size > 250 ? 2 : 1
//     }
//     return <img
//         src={src}
//         style={{ ...style }}
//     />
// }