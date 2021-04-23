import React, { EventHandler, MouseEvent, MouseEventHandler, useEffect, useRef, useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { IconWrapper } from '../../icons/iconWrapper'
import { FaFacebook } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { TabBase } from '../../Tabs/TabBase'
import { Fade, Popover } from '../../Popover'
import { SearchResults } from './SearchResults'
import { Transition } from "react-transition-group"

export const Search = () => {
    const [open, setOpen] = useState(false)

    const anchor = useRef(null)
    const handleSearch = () => {
        setOpen(true)
    }
    const close = () => {
        setOpen(false)
    }


    return (
        <div className="search">
            <IconWrapper >
                <FaFacebook />
            </IconWrapper>
            <IconWrapper onClick={handleSearch}
                ref={anchor}
            >
                <BiSearch />
            </IconWrapper>
            <TabBase classname="tab__base--mobile">
                <GiHamburgerMenu />
            </TabBase>
            <Fade
                open={open}
                anchor={anchor}
            >
                {(popoverRef: any) =>
                    <SearchResults {...{ close, open, popoverRef }} />}
            </Fade >
        </div>
    )
}

