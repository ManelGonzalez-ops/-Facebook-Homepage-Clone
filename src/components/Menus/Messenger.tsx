import React, { useState } from 'react'
import { IconWrapper } from '../icons/iconWrapper'
import { Header } from "../text-items/Headers"
import { FiMoreHorizontal } from "react-icons/fi"
import { HiArrowsExpand } from "react-icons/hi"
import { MdVideoCall } from "react-icons/md"
import { BiEdit } from "react-icons/bi"
import { useClosePopover } from '../Utils/useClosePopover'
import { InputSearch } from '../inputs/InputSearch'
import { ListItemBig } from '../list-items/ListItemBig'
import { TextMultiline, TextNotification } from '../text-items/TextMultiline'
import { DotAccent } from "../Feedback/DotAccent"
import { IoMdChatboxes } from "react-icons/io"
import { useFakeData } from '../../Context'

const icons = [FiMoreHorizontal, HiArrowsExpand, MdVideoCall, BiEdit]

interface messenger {
    popoverRef: any
    close: () => void
}
export const Messenger: React.FC<messenger> = ({ popoverRef, close }) => {
    useClosePopover({ popoverRef, action: close })
    const [showIcon, setShowIcon] = useState(true)
    const [inputVal, setInputVal] = useState("")

    const { data: { messenger, loading } } = useFakeData()
    if (loading) {
        return <div>loading</div>
    }
    return (
        <div
            className="menuMessenger"
        >
            <header
                className="menuMessenger__header"
            >
                <div
                    className="menuMessenger__title"
                >
                    <Header text="Messenger" />
                </div>
                <div
                    className="menuMessenger__actions"
                >
                    {icons.map(Icon =>
                        <IconWrapper
                            height={30}
                            width={30}
                            transparent
                            hoverable
                        >
                            {<Icon style={{ fontSize: "21px" }} />}
                        </IconWrapper>
                    )}
                </div>
            </header>

            <div
                className="menuMessenger__search"
            >
                <InputSearch
                    placeholder={"Cerca a Messenger"}
                    inputProps={{ paddingLeft: "35px" }}
                    {...{ showIcon, setShowIcon, inputVal, setInputVal }}
                />
            </div>
            <div
                className="menuMessenger__body"
            >
                <ListItemBig
                    isHoverable
                    renderText={() => <TextMultiline
                        title="New Message Requests"
                        subtitle={
                            <h4 className="textItem-Multiline__text--sm--accent">from Domenica Conti and 14 more</h4>
                        }

                    />}
                    type="icon"
                    icon={<IconWrapper
                        height={56}
                        width={56}
                        marginRight={12}
                    >
                        <IoMdChatboxes />
                    </IconWrapper>}

                />
                {messenger.length && messenger.map((user, index) =>

                    <ListItemBig
                        key={index}
                        renderText={() => <TextNotification
                            modification={{ justifyContent: "center", paddingRight: "23px" }}
                            text={user.full_name}
                            footer={`${user.full_name} y tu celebreu`}
                            dateInfo={<span
                                className="listItem--big__dateInfo">
                                ·&nbsp;24 setm.
                                </span>}
                        />}
                        type="image"
                        image={
                            <img
                                className="listItem--big__image"
                                src={user.userImage}
                            />
                        }
                        endIcon={<DotAccent
                            modification={{ marginLeft: "10px" }}
                        />}
                        customStyles={{ height: "72px" }}

                    />)}
            </div>
        </div>
    )
}
