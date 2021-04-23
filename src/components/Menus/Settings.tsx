import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { CSSTransition, Transition } from 'react-transition-group'
import { ListItem } from '../list-items/ListItem'
import { ListItemBig } from '../list-items/ListItemBig'
//import { ListItem } from '../list-items/ListItem'
import { useClosePopover } from '../Utils/useClosePopover'
import { TextMultiline, TextMultilineBig } from '../text-items/TextMultiline'
import { Separator } from '../Utils/Separator'
import { Prueba1 } from './Prueba1'
import { IoIosArrowForward } from "react-icons/io"
import { IconWrapper } from '../icons/iconWrapper'
import { RiMessage2Fill } from "react-icons/ri"
import { Config } from './settings/Config'

interface menuDinamic {
    popoverRef?: any,
    close: () => void,
    // viewId: number,
    // setViewId: Dispatch<SetStateAction<number>>,

}
export const MenuDinamic: React.FC<menuDinamic> = ({ popoverRef, close }) => {

    useClosePopover({ popoverRef, action: close })

    const [viewId, setViewId] = useState(1)

    const menuRef = useRef(null)
    const [menuHeight, setMenuHeight] = useState(0)
    const updateHeight = (el: HTMLElement) => {
        setMenuHeight(el.offsetHeight)
    }

    const menuViews = [
        {
            id: 1,
            Component: Principal,
            title: "hola",
            classNameTransition: "principal" 
        },
        {
            id: 2,
            Component: Prueba1,
            title: "comeme el culo",
            classNameTransition: "principal" 
        },
        // {
        //     id: 3,
        //     Component: Config
        // }
    ]


    return (
        <div
            className="menuDyn"
            ref={menuRef}
            style={menuHeight ? { height: menuHeight + "px" } : { height: "auto" }}
        >

            {
                menuViews.map(({ Component, id, title }) => (
                    <Component selected={viewId === id}
                        {...{ updateHeight, setViewId, title }}
                    />
                ))
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
    selected: boolean,
    updateHeight: (el: HTMLElement) => void,
    setViewId: Dispatch<SetStateAction<number>>
}
const Principal: React.FC<menuDinamicView> = ({ selected, updateHeight, setViewId }): any => {

    return (
        <CSSTransition
            in={selected}
            timeout={400}
            //mountOnEnter
            classNames="principal"
            unmountOnExit
            onEnter={updateHeight}
        >
            <div
                className="transition-wrapper"
                style={{ padding: "8px" }}
            >
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
                            <RiMessage2Fill />
                        </IconWrapper>}
                    />
                    <Separator />
                </div>
                {
                    [1, 2, 3].map((id, index) => (
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
                                    onClick={() => { setViewId(id) }}
                                />
                            }
                        />
                    ))
                }
            </div>
            {/* {
                (animState: any) =>
                    <div
                        style={{ ...defaultStyles, ...transitionStyles[animState] }}
                    >
                        {
                            [...Array(3)].map((_, index) => (
                                <ListItem
                                    key={index}
                                    text="Julia Pavan"
                                    image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                                />
                            ))
                        }
                    </div>} */}
        </CSSTransition>
    )
}