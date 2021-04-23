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
export const Actions = () => {
    const [open, setOpen] = useState("")
    const [viewId, setViewId] = useState(1)

    const anchor = useRef(null)

    const close = () => {
        setOpen("")
    }
    const togleView = () => {
        viewId === 1 ? setViewId(2) : setViewId(1)
    }
    return (
        <div className="actions__list" ref={anchor}>
            <IconWrapper classname="actions__item"
                onClick={() => { setOpen("create") }}
            >
                <BiPlus />
            </IconWrapper>
            <IconWrapper classname="actions__item"
                onClick={() => { setOpen("messenger") }}
            >
                <RiMessengerFill />
            </IconWrapper>
            <IconWrapper classname="actions__item"
                onClick={() => { setOpen("notifications") }}
            >
                <BsBellFill />
            </IconWrapper>
            <IconWrapper classname="actions__item"
                onClick={() => { setOpen("settings") }}
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
            >
                {(popoverRef: any) =>
                    <Create {...{ close, popoverRef }} />}
            </Fade>
            <Fade
                open={open === "messenger"}
                anchor={anchor}
                width="360px"
            >
                {(popoverRef: any) =>
                    <Messenger {...{ close, popoverRef }} />}
            </Fade>
            <Fade
                open={open === "notifications"}
                anchor={anchor}
                width="360px"
            >
                {(popoverRef: any) =>
                    <Notifications {...{ close, popoverRef, viewId, setViewId }} />}
            </Fade>
            <Fade
                open={open === "settings"}
                anchor={anchor}
                width="360px"
            >
                {(popoverRef: any) =>
                    <MenuDinamic {...{ close, popoverRef, viewId, setViewId }} />}
            </Fade>
        </div>
    )
}
