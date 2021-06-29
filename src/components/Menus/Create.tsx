import React, { ElementType, ReactElement, ReactNode } from 'react'
import { IconWrapper } from '../icons/iconWrapper'
import { ListItem } from '../list-items/ListItem'
import { Header } from '../text-items/Headers'
import { TextMultiline } from '../text-items/TextMultiline'
import { useClosePopover } from '../Utils/useClosePopover'
import { BiCalendarEvent, BiEdit } from "react-icons/bi"
import { IoIosBook } from "react-icons/io"
import { Separator } from '../Utils/Separator'
import { AiFillStar } from 'react-icons/ai'
import { HiFlag, HiUserGroup } from 'react-icons/hi'
import { RiCoinFill, RiHandbagFill } from 'react-icons/ri'
import { GiTwoCoins } from 'react-icons/gi'

interface create {
    popoverRef: any
    close: () => void
}
interface IlistItem {
    Icon: ElementType,
    title: string,
    subtitle: string,
    separator?: boolean
}
const listItems: IlistItem[] = [
    {
        Icon: BiEdit,
        title: "Post",
        subtitle: "Share a psot on News Feed"
    },
    {
        Icon: IoIosBook,
        title: "Historia",
        subtitle: "Share a photo or write something"
    },
    {
        Icon: AiFillStar,
        title: "Episodi de vida",
        subtitle: "Add a life event to your profile"
    },
    {
        Icon: HiFlag,
        title: "Página",
        subtitle: "Connect and share with customers or fans",
        separator: true
    },
    {
        Icon: HiUserGroup,
        title: "Grupos",
        subtitle: "Connect with people who shares your interests",
    },
    {
        Icon: BiCalendarEvent,
        title: "Eventos",
        subtitle: "Bring people together with a public or private event"
    },
    {
        Icon: RiHandbagFill,
        title: "Anuncios de Mercado",
        subtitle: "Sell items to people in your community"
    },
    {
        Icon: RiCoinFill,
        title: "Recauda fondos",
        subtitle: "Raise money for a cause you care about"
    }
]

export const Create: React.FC<create> = ({ popoverRef, close }) => {
    useClosePopover({ popoverRef, action: close })
    return (
        <div
            className="menuCreate"
        >
            <div
                className="menuCreate__header"
            >
                <Header text="Create" />
            </div>
            <div
                className="menuCreate__body"
            >
                {listItems.map(({ Icon, title, subtitle, separator }) => (
                    separator ?
                        <>
                            <Separator />
                            <ListTask
                                {...{ Icon, title, subtitle }}
                            />
                        </>
                        :
                        <ListTask
                            {...{ Icon, title, subtitle }}
                        />
                ))}

            </div>
        </div>
    )
}


const ListTask: React.FC<IlistItem> = ({ Icon, title, subtitle, separator }): any =>
    <ListItem
        renderText={() => <TextMultiline
            title={title}
            subtitle={subtitle}
        />}
        type="icon"
        icon={<IconWrapper
            height={36}
            width={36}
        >
            <Icon />
        </IconWrapper>
        }
        customStyles={{ height: "auto" }}
    />
