import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { CSSTransition, Transition } from 'react-transition-group'
import { ListItem } from '../list-items/ListItem'
import { ListItemBig } from '../list-items/ListItemBig'
//import { ListItem } from '../list-items/ListItem'
import { useClosePopover } from '../Utils/useClosePopover'
import { TextMultiline, TextMultilineBig } from '../text-items/TextMultiline'
import { Separator } from '../Utils/Separator'
import { Config } from './settings/Config'
import { IoIosArrowForward } from "react-icons/io"
import { IconWrapper } from '../icons/iconWrapper'
import { RiMessage2Fill } from "react-icons/ri"
import { Accesibility } from './settings/Accesibility'
import { Help } from './settings/Help'
import { Keyboard } from './settings/Keyboard'
//icons
//MdSettings
//AiFillQuestionCircle
//FaMoon
//ImExit

export interface menuView {
    title: string,
    handleGoBack: () => void
}
export interface MenuViewWithNesting {
    title: string,
    handleGoBack: () => void,
    handleGoForward: (id: number) => void
}
interface menuDinamic {
    popoverRef?: any,
    close: () => void,
    handleGoForward?: (id: number) => void
}


export const MenuDinamic: React.FC<menuDinamic> = ({ popoverRef, close }) => {

    useClosePopover({ popoverRef, action: close })
    const menuViewsTemplate = [
        {
            id: 1,
            Component: Principal,
            title: "hola",
            classNameTransition: "principal"
        },
        {
            id: 2,
            Component: Config,
            title: "Configuració i Privacitat",
            classNameTransition: "prueba1"
        },
        {
            id: 3,
            Component: Help,
            title: "Help & Support",
            classNameTransition: "prueba1"
        },
        {
            id: 4,
            Component: Accesibility,
            title: "Display & Accessibility",
            classNameTransition: "prueba1",
        },
        {
            id: 5,
            Component: Keyboard,
            title: "Keyboard",
            classNameTransition: "prueba1"
        }
    ]
    const [viewId, setViewId] = useState(1)

    const menuRef = useRef(null)
    const [menuHeight, setMenuHeight] = useState(0)
    const updateHeight = (el: HTMLElement) => {
        setMenuHeight(el.offsetHeight)
    }
    const handleGoBack = () => {
        if (viewId === 5) {
            setIsInKeyboard(true)
            setViewId(4)
        } else {
            setIsInKeyboard(false)
            setViewId(1)
        }
    }

    const handleGoForward = (id: number) => {
        if (id === 5) {
            setIsInKeyboard(true)
            setViewId(5)
        } else {
            setViewId(id)
        }
    }

    const [menuViews, setMenuViews] = useState(menuViewsTemplate)

    const [isInKeyboard, setIsInKeyboard] = useState(false)


    return (
        <div
            className="menuDyn"
            ref={menuRef}
            style={menuHeight ? { height: menuHeight + "px" } : { height: "auto" }}
        >

            {
                menuViews.map(({ Component, id, title, classNameTransition, ...rest }) => {
                    if (id === 4) {
                        return (<CSSTransition
                            in={id === viewId}
                            timeout={400}
                            //mountOnEnter
                            classNames={isInKeyboard ? "principal" : "prueba1"}
                            unmountOnExit
                            onEnter={updateHeight}
                        >
                            <div
                                className="transition-wrapper"
                                style={{ padding: "8px" }}
                            >
                                <Accesibility
                                    {...{ title, handleGoBack, handleGoForward }}
                                />
                            </div>
                        </CSSTransition>)
                    }
                    return (

                        <CSSTransition
                            in={id === viewId}
                            timeout={400}
                            //mountOnEnter
                            classNames={classNameTransition}
                            unmountOnExit
                            onEnter={updateHeight}
                        >
                            <div
                                className="transition-wrapper"
                                style={{ padding: "8px" }}
                            >
                                <Component
                                    {...{ title, handleGoBack, handleGoForward }}
                                />
                            </div>
                        </CSSTransition>

                    )
                })
            }


        </div>
    )
}

const defaultStyles = {
    transition: "transform 0.5s ease",
    position: "absolute",
    width: "100%"
} as any
const transitionStyles = {
    entering: { transform: "translateX(0%)" },
    entered: { transform: "translateX(0%)" },
    exiting: { transform: "translateX(-100%)" },
    exited: { transform: "translateX(-100%)" },
}

interface menuDinamicView {
    handleGoForward: (id: number) => void
}
const Principal: React.FC<menuDinamicView> = ({ handleGoForward }): any => {

    return (
        <>
            <ListItemBig
                image={<img
                    className="listItem--big__image"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />}
                renderText={() => <TextMultilineBig
                    title="Julia Pavan"
                    subtitle="comeme el culo"
                />}

            />
            <div>
                <Separator />
                <ListItem

                    type="icon"
                    renderText={() => <TextMultiline
                        title="Opina"
                        subtitle="Help us to improve facebook"
                    />}
                    icon={<IconWrapper
                        height={36}
                        width={36}

                    >
                        <RiMessage2Fill
                        />
                    </IconWrapper>}
                />
                <Separator />
            </div>
            {
                [2, 3, 4].map((id, index) => (
                    <ListItem
                        key={index}
                        renderText={() => "Julia Pavan"}
                        image={
                            < img
                                className="listItem__image"
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                        }
                        endIcon={
                            <IoIosArrowForward
                                style={{ transform: "scale(1.5)" }}
                                onClick={() => { handleGoForward(id) }}
                                className="icon--centered"
                            />
                        }
                    />
                ))
            }

        </>
    )
}