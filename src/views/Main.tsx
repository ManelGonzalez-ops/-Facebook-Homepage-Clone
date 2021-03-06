import React, { useState } from 'react'
import { AsideLeft } from '../components/AsideLeft'
import { ChatList } from '../components/chatList.tsx/ChatList'
import { ActionBlock } from "../components/ActionBlock/Index"
import { ImageList } from '../components/imageList'
import { PostsList } from "../components/Post/PostsList"
import { useDummyData } from '../components/Main/Index'
import { useFakeData } from '../Context'
import { BubbleList } from '../components/BubbleList'
export const Main = () => {
    const [showScroll1, setShowScroll1] = useState(false)
    const [showScroll2, setShowScroll2] = useState(false)
    return (
        <div
            className="grid-main"
        >
            <div
                className="asideLeft"
                onMouseOver={() => { setShowScroll1(true) }}
                onMouseOut={() => { setShowScroll1(false) }}
            >
                <span className={showScroll1 ? "scrollbar-mask1" : "scrollbar-mask1--hidden"}></span>
                <AsideLeft />
            </div>
            <div
                className="contentMain"
            >
                <div className="contentMain__wrapperOuter">
                    <ImageList />
                    <div className="contentMain__wrapper">
                        <ActionBlock />
                        <BubbleList />
                        <PostsList />
                    </div>
                </div>
            </div>

            <div
                className="asideRight"
                onMouseOver={() => { setShowScroll2(true) }}
                onMouseOut={() => { setShowScroll2(false) }}
            >
                <ChatList />
                <span className={showScroll2 ? "scrollbar-mask2" : "scrollbar-mask2--hidden"}></span>
            </div>
        </div>
    )
}
