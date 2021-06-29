import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useFakeData } from '../Context'
import { DotAccent } from './Feedback/DotAccent'
import { ImageWithBadge } from './media/ImageWithBadge'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Transition } from 'react-transition-group'
import { _array } from './Post/PostsList'

import ContentLoader from "react-content-loader"

const MyLoader = ({ qty, ...props }) => (
    <ContentLoader
        speed={2}
        width={500}
        height={40}
        viewBox="0 0 500 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
    
        {_array(qty).map((_, index) => <circle cx={index ? 40 * index + 20 : 20} cy="20" r="18" />)}
    </ContentLoader>
)

export const BubbleList = () => {
    const { data: { chatList, loading } } = useFakeData()
    const [control, setControl] = useState("forward")
    const list = useRef<HTMLDivElement>(null)
    const goForward = (el) => {
        el.style.transform = "translate(-400px)"
        setControl("backwards")

    }
    const goBack = (el) => {
        el.style.transform = "translate(0px)"
        setControl("forward")
    }


    return (
        <div
            className="bubbleList dynamic-border"
        >
            <Transition
                in={control === "forward"}
                timeout={300}
            >
                {(state) => (
                    <ControlButton
                        action={goForward}
                        list={list}
                        icon={<IoIosArrowForward />}
                        classname="scroller-button--forward"
                        animState={state}
                    />
                )}
            </Transition>
            <Transition
                in={control === "backwards"}
                timeout={200}
            >
                {(state) => (
                    <ControlButton
                        action={goBack}
                        list={list}
                        icon={<IoIosArrowBack />}
                        classname="scroller-button--back"
                        animState={state}
                    />
                )}
            </Transition>
            {/* {
                control === "forward"
                &&
                <ControlButton
                    action={goForward}
                    list={list}
                    icon={<IoIosArrowForward />}
                    classname="scroller-button--forward"
                    animState={state}
                />

            } */}

            {/* {control === "back"
                &&
                <ControlButton
                    action={goBack}
                    list={list}
                    icon={<IoIosArrowBack />}
                    classname="scroller-button--back"
                    
                />
            } */}

            <div
                className="scrollable"
                ref={list}
            >
                <button
                    className="bubbleList__button"
                >
                    <span>
                        <i className="icon" />
                    </span>
                    <p>Create Room</p>
                </button>

                <div
                    className="bubbleList__list"
                >
                    {
                        loading ?
                        <MyLoader qty={14} />
                            

                            :
                            chatList.length &&
                            chatList.slice(0, 14).map(user => (

                                <ImageWithBadge
                                    image={< img
                                        className="listItem__image"
                                        style={{ width: "40px", height: "40px" }}
                                        src={user.userImage} />
                                    }

                                    badgeIcon={
                                        <DotAccent
                                            modification={{
                                                backgroundColor: "#31a24c",
                                                border: "2px solid #f0f2f5"
                                            }}
                                        />
                                    }
                                    badgeAnchor={{
                                        right: "12px",
                                        bottom: "2px"
                                    }}
                                />
                            ))

                    }
                </div>
            </div>
        </div>
    )
}

const customStyles = {
    transition: "opacity 0.2s ease",
    opacity: 1
}
const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
    unmounted: {}
}

const ControlButton = ({ action, list, icon, classname, animState }) => {
    const [isPressed, setIsPressed] = useState(false)
    const press = () => {
        setIsPressed(true)
    }
    const unpress = () => {
        setIsPressed(false)
    }
    return (
        <button
            className={isPressed ? classname + " pressed" : classname}
            onClick={() => { action(list.current) }}
            onMouseDown={press}
            onMouseUp={unpress}
            onMouseOut={unpress}
            style={{ ...customStyles, ...transitionStyles[animState] }}
        >
            {icon}
        </button>
    )
}