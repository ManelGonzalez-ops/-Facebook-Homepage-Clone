import React, { Dispatch, SetStateAction } from 'react'
import { CSSTransition, Transition, TransitionStatus } from 'react-transition-group'
import { ListItemBig } from '../list-items/ListItemBig'
import { ListItem } from '../list-items/ListItem'
import { IconWrapper } from '../icons/iconWrapper'
import { MdKeyboardBackspace } from 'react-icons/md'
import { ConfigHeader } from './settings/ConfigHeader'

interface menuDinamic {
    selected: boolean,
    updateHeight: (el: HTMLElement) => void,
    setViewId: Dispatch<SetStateAction<number>>,
    title: string
}

const defaultStyles = {
    transition: "transform 0.5s ease",
    //position: "absolute",
    width: "100%"
} as any

const transitionStyles = {
    entering: { transform: "translateX(0%)" },
    entered: { transform: "translateX(0%)" },
    exiting: { transform: "translateX(100%)" },
    exited: { transform: "translateX(100%)" },
    unmounted: {}
}

export const Prueba1: React.FC<menuDinamic> = ({ selected, updateHeight, setViewId, title }): any => {

    return (
        <CSSTransition
            in={selected}
            timeout={400}
            //mountOnEnter
            classNames="prueba1"
            unmountOnExit
            onEnter={updateHeight}
        >
            <div className="transition-wrapper"
                style={{ padding: "8px" }}
            >
                <div className="config">
                    <ConfigHeader {...{ setViewId, title }} />
                    {[...Array(7)].map((_, index) => (
                        <ListItem
                            key={index}
                            renderText={() => "Julia Pavan"}
                            image={
                                < img
                                    className="listItem__image"
                                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                            }
                        />
                    ))}
                </div>
            </div>
            {/* {
                (animState) =>
                    <div style={{ ...defaultStyles, ...transitionStyles[animState] }}>
                        {[...Array(7)].map((_, index) => (
                            <ListItem
                                key={index}
                                text="Julia Pavan"
                                image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                            />
                        ))}
                    </div>
            } */}
        </CSSTransition>
    )
}
