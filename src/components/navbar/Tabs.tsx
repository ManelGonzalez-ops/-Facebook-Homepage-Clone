import React from 'react'
import { BsHouseDoorFill, BsCollectionPlay, BsFillCollectionPlayFill } from "react-icons/bs"
import { IoStorefrontOutline, IoStorefrontSharp, IoPeopleOutline, IoPeopleSharp } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import { TabBase } from '../Tabs/TabBase'
export const Tabs = () => {
    return (
        <div className="tab__list">
            <TabBase>
                <BsHouseDoorFill />
            </TabBase>
            <TabBase>
                <BsCollectionPlay />
            </TabBase>
            <TabBase>
                <IoStorefrontOutline />
            </TabBase>
            <TabBase >
                <IoPeopleOutline />
            </TabBase>
            <TabBase classname="tab__item--desktop">
                <GiHamburgerMenu/>
            </TabBase>

        </div>
    )
}
