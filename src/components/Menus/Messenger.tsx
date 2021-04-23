import React from 'react'
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

const icons = [FiMoreHorizontal, HiArrowsExpand, MdVideoCall, BiEdit]

interface messenger {
    popoverRef: any
    close: () => void
}
export const Messenger: React.FC<messenger> = ({ popoverRef, close }) => {
    useClosePopover({ popoverRef, action: close })
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
                            height={28}
                            width={28}
                        >
                            {<Icon style={{ height: "18px", width: "18px" }} />}
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
                />
            </div>
            <div
                className="menuMessenger__body"
            >
                <ListItemBig
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
                {[...Array(5)].map((_, index) =>

                    <ListItemBig
                        key={index}
                        renderText={() => <TextNotification
                            modification={{ justifyContent: "center" }}
                            text="Marisa Cayetano"
                            footer="Marisa Cayetano y tu celebreu"
                            dateInfo={<span
                                className="listItem--big__dateInfo">
                                ·&nbsp;24 setm.
                                </span>}
                        />}
                        type="image"
                        image={
                            <img
                                className="listItem--big__image"
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                                style={{ width: "calc(72px - 16px)" }}
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
