import React from 'react'
import { IconWrapper } from '../icons/iconWrapper'
import { ListItem } from '../list-items/ListItem'
import { Header } from '../text-items/Headers'
import { TextMultiline } from '../text-items/TextMultiline'
import { useClosePopover } from '../Utils/useClosePopover'
import { BiEdit } from "react-icons/bi"
import { Separator } from '../Utils/Separator'

interface create {
    popoverRef: any
    close: () => void
}
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
                <ListTask num={3} subtitle={"Bring people together with a public or mamala molt"}/>
                <Separator />
                <ListTask num={5} subtitle={"Bring people together with a public or"}/>
            </div>
        </div>
    )
}


interface listProps {
    num: number,
    subtitle: string
}
const ListTask: React.FC<listProps> = ({ num, subtitle }): any => [...Array(num)]
    .map(_ => (
        <ListItem
            renderText={() => <TextMultiline
                title="Post"
                subtitle={subtitle}
            />}
            type="icon"
            icon={<IconWrapper
                height={36}
                width={36}
            >
                <BiEdit />
            </IconWrapper>
            }

            customStyles={{ height: "auto" }}
        />
    ))