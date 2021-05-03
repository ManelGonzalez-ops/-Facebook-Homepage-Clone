import React, { useEffect, useRef, useState } from 'react'
import { BsHouseDoorFill, BsCollectionPlay, BsFillCollectionPlayFill } from "react-icons/bs"
import { IoStorefrontOutline, IoStorefrontSharp, IoPeopleOutline, IoPeopleSharp } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import { TabBase } from '../Tabs/TabBase'
import { useViewport } from '../Utils/useViewport'
import { useFakeData } from '../../Context'
export const Tabs = () => {
    const {data: {loading}} = useFakeData()
    const [selected, setSelected] = useState(1)
    const [width, height] = useViewport()
    const tablist = useRef<HTMLDivElement>(null)
    const indicator = useRef(null)
    const lastSelected = useRef<any>(null)
    const tabDimensions = useRef<any>(null)
    const tabsInfo = useRef<any>(null)
    const getFirstTabsWidth = (nodes: HTMLDivElement[]): any => {
        return { width: nodes[0].offsetWidth, left: nodes[0].getBoundingClientRect().left }

    }
    const tabs = [
        {
            id: 1,
            Icon: BsHouseDoorFill,
            classname: "hoverable-tab"
        },
        {
            id: 2,
            Icon: BsCollectionPlay,
            classname: "hoverable-tab"
        },
        {
            id: 3,
            Icon: IoStorefrontOutline,
            classname: "hoverable-tab"
        },
        {
            id: 4,
            Icon: IoPeopleOutline,
            classname: "hoverable-tab"
        },
        {
            id: 5,
            Icon: GiHamburgerMenu,
            classname: "tab__item--desktop hoverable-tab"
        },
    ]

    const getTranslationValues = (width) => {
        let nodesData: any[] = []
        let translationSum = 0
        tabs.forEach((tab: any) => {
            nodesData = [...nodesData, {
                id: tab.id,
                translation: translationSum
            }]
            //we have to substract 5px of margin 
            translationSum += width + 5
        })
        tabsInfo.current = nodesData
    }

    useEffect(() => {
        if (tablist.current) {
            const tabList = Array.from((tablist.current as any).children);
            const { width, left } = getFirstTabsWidth(tabList as any);
            tabDimensions.current = { width, left };
            (indicator.current as any).style.width = width + "px";
            (indicator.current as any).style.left = left + "px"
            getTranslationValues(width)
        }
    }, [width, loading])

    useEffect(() => {
        if (!tabsInfo.current) {
            return
        }
        console.log(tabsInfo.current, selected, "wata")
        const selectedTab = tabsInfo.current.find((item: any) => item.id == selected);
        console.log(selectedTab, "seltab");
        (indicator.current as any).style.transform = `translateX(${selectedTab.translation}px)`;
    }, [selected, width, loading])
    return (

        <div className="tab__list"
            ref={tablist}
        >{
                tabs.map(item => {
                    const { id, Icon, classname } = item
                    if (classname) {
                        return <TabBase {...{ id, classname, setSelected }}>
                            <Icon
                                className={selected === id ? "icon--selected" : "icon"}
                            />
                        </TabBase>
                    }
                    return <TabBase
                        {...{ id, setSelected }}
                    >
                        <Icon
                            className={selected === id ? "icon--selected" : "icon"}
                        />
                    </TabBase>
                })
            }
            <div
                ref={indicator}
                className="tab__indicator"
            />
        </div>
    )
}
