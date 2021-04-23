import React from 'react'
import { FacebookIcon } from '../components/icons/FacebookIcon'
import { GiHamburgerMenu } from "react-icons/gi"
import { IconWrapper } from '../components/icons/iconWrapper'
import { Actions } from '../components/navbar/Actions'
import { Search } from '../components/navbar/search/search'
import { Tabs } from '../components/navbar/Tabs'

export const Navbar = () => {
    return (

        <nav
            className="nav"
        >
            {/* <div
                className="nav__logo"
            >
        </div> */}
            <div
                className="nav__search"
            >
                <Search />
            </div>
            <div
                className="nav__space"
            />
            <div
                className="nav__tabs"
            >
                <Tabs />
            </div>
            <div
                className="nav__space--small"
            />
            <div
                className="nav__actions"
            >
                <Actions />

            </div>
        </nav>

    )
}
