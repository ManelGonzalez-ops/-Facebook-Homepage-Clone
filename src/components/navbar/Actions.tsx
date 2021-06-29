import React, { useRef, useState } from 'react'
import { BiPlus } from "react-icons/bi"
import { RiMessengerFill } from "react-icons/ri"
import { BsBellFill } from "react-icons/bs"
import { VscTriangleDown } from "react-icons/vsc"
import { IconWrapper } from '../icons/iconWrapper'
import { Transition, TransitionStatus } from 'react-transition-group'
import { Popover, Fade } from '../Popover'
import { MenuDinamic } from '../Menus/Settings'
import { Notifications } from '../Menus/Notifications'
import { Messenger } from '../Menus/Messenger'
import { Create } from '../Menus/Create'
import { ListItem } from '../list-items/ListItem'
import { useViewport } from '../Utils/useViewport'
const src = "https://scontent-mad1-1.xx.fbcdn.net/v/t31.18172-1/cp0/c0.7.40.40a/p40x40/28515963_1835476116465174_61291875568430836_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=0TTomisEccMAX_qNT6F&_nc_ht=scontent-mad1-1.xx&tp=27&oh=e01140069e3cd221933151d5112ffa71&oe=60A91A62"
export const Actions = () => {
    const [open, setOpen] = useState("")
    const [viewId, setViewId] = useState(1)

    const [width] = useViewport()

    const anchor = useRef(null)

    const close = () => {
        setOpen("")
    }
    const togleView = () => {
        viewId === 1 ? setViewId(2) : setViewId(1)
    }
    return (
        <div className="actions__list" ref={anchor}>

            {
                width > 1260 &&
                <div
                    className="actions__item hoverable"
                >
                    <div
                        className="actions__profile"
                    >
                        <img src={src} className="listItem__image--xs" />
                        <p
                            className="actions__profileTitle"
                        >Manel</p>
                    </div>
                </div>}
            <IconWrapper classname="actions__item"
                onClick={() => { setOpen("create") }}
                hoverable
            >
                <BiPlus />
            </IconWrapper>
            <IconWrapper classname="actions__item"
                onClick={() => { setOpen("messenger") }}
                hoverable
            >
                <RiMessengerFill />
            </IconWrapper>
            <IconWrapper classname="actions__item"
                onClick={() => { setOpen("notifications") }}
                hoverable
            >
                <BsBellFill />
            </IconWrapper>
            <IconWrapper classname="actions__item"
                onClick={() => { setOpen("settings") }}
                hoverable
            >
                <VscTriangleDown />
            </IconWrapper>
            {/* <button
                style={{ position: "relative", zIndex: 4 }}
                onClick={togleView}
            >Change me</button> */}
            <Fade
                open={open === "create"}
                anchor={anchor}
                width="360px"
                padding="0 5px 0 0"
                right="15px"
                top="53px"
            >
                {(popoverRef: any) =>
                    <Create {...{ close, popoverRef }} />}
            </Fade>
            <Fade
                open={open === "messenger"}
                anchor={anchor}
                width="360px"
                padding="0 5px 0 0"
                right="15px"
                top="53px"
            >
                {(popoverRef: any) =>
                    <Messenger {...{ close, popoverRef }} />}
            </Fade>
            <Fade
                open={open === "notifications"}
                anchor={anchor}
                width="360px"
                padding="0 5px 0 0"
                right="15px"
                top="53px"
            >
                {(popoverRef: any) =>
                    <Notifications {...{ close, popoverRef, viewId, setViewId }} />}
            </Fade>
            <Fade
                open={open === "settings"}
                anchor={anchor}
                width="360px"
                padding="0 5px 0 0"
                right="15px"
                top="53px"
            >
                {(popoverRef: any) =>
                    <MenuDinamic {...{ close, popoverRef, viewId, setViewId }} />}
            </Fade>
        </div>
    )
}
