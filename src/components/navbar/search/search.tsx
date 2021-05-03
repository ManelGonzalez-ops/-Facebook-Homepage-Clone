import React, { EventHandler, MouseEvent, MouseEventHandler, useEffect, useRef, useState } from 'react'
// import { BiSearch } from "react-icons/bi"
import { IoSearch } from "react-icons/io5";
import { IconWrapper } from '../../icons/iconWrapper'
import { FaFacebook } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { TabBase } from '../../Tabs/TabBase'
import { Fade, Popover } from '../../Popover'
import { SearchResults } from './SearchResults'
import { Transition } from "react-transition-group"
import { InputSearch } from '../../inputs/InputSearch'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useViewport } from '../../Utils/useViewport'

export const Search = () => {
    const [open, setOpen] = useState(false)

    const anchor = useRef(null)
    const input = useRef(null)
    const handleSearch = () => {
        console.log("opppen")
        setOpen(true)
    }
    const [width] = useViewport()
    const isSmallDevice = width < 1260
    const close = () => {
        if (isSmallDevice) {
            //we hide input again from navbar on smaller devices
            setShowInput(false)
        }
        setShowIcon(true)
        setOpen(false)
    }
    const [showIcon, setShowIcon] = useState(true)
    const [showInput, setShowInput] = useState(false)
    const [inputVal, setInputVal] = useState("")


    return (
        <div className="search">
            <IconWrapper
            >
                <FaFacebook />
            </IconWrapper>
            <div className="inputSearch__wrapper"
                onMouseDown={() => { setShowInput(true) }}

            >
                <div style={{ display: "flex" }}

                >
                    <IconWrapper onClick={handleSearch}
                        ref={anchor}
                    >
                        <IoSearch

                        />
                    </IconWrapper>
                </div>
            </div>
            <TabBase classname="tab__base--mobile hoverable-tab">
                <GiHamburgerMenu />
            </TabBase>
            {(showInput || !isSmallDevice) && <div
                className="inputSearch__wrapper--abs"
                onMouseUp={handleSearch}
                ref={input}
                onMouseOver={() => { input.current && (input.current as any).focus() }}
            >
                <InputSearch
                    key={5}
                    hideIconOnBlur={true}
                    {...{ showIcon, setShowIcon }}
                    {...{ inputVal, setInputVal }}
                />
            </div>}

            <Fade
                open={open}
                anchor={anchor}
            >
                {(popoverRef: any) =>
                    <SearchResults {...{ close, open, popoverRef, inputVal, setInputVal }} />}
            </Fade >
        </div>
    )
}

