import React from 'react'
import { InputBase } from '../inputs/InputBase'
import { useViewport } from '../Utils/useViewport'
import { ActionButton } from './ActionButton'
import iconCollection from "../../media/facebook-icons.png"

export const ActionBlock = () => {
    const [width, height] = useViewport()
    return (

        <div
            className="actionBlock dynamic-border"
        >
            <div
                className="actionBlock__search"
            >
                <img className="actionBlock__image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                <InputBase
                    placeholder="What's on your mind, Manel?"
                />
            </div>
            <div className="actionBlock__line" />
            <div
                className="actionBlock__actions"
            >
                <ActionButton text="Vídeo en directe"
                    iconStyles={{backgroundImage: `url(${iconCollection})`, backgroundPosition:"0 0", width: "24px", height: "24px" }}
                />
                <ActionButton text="Photo/Vídeo"
                    iconStyles={{backgroundImage: `url(${iconCollection})`, backgroundPosition:"0 -125px", width: "24px", height: "24px" }}
                />
                {height > 700 &&
                    (width < 1100 || width > 1124) &&
                    <ActionButton text="Sentiment/activitat"
                        iconStyles={{backgroundImage: `url(${iconCollection})`, backgroundPosition:"0 -25px", width: "24px", height: "24px" }}
                    />}
            </div>
        </div>

    )
}
