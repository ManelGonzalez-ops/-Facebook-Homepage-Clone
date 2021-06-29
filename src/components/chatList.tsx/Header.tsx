import React from 'react'
import { MdVideoCall } from "react-icons/md"
import { IconWrapper } from '../icons/iconWrapper'
import { Separator } from '../Utils/Separator'
import { CgSearch } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi"

const iconList = [
    MdVideoCall,
    CgSearch,
    FiMoreHorizontal
]
export const Header = () => {
    return (
        <>
            <div
                className="chatList__header"
            >
                <h3
                >Patrocinat</h3>
            </div>
            <div className="chatList__separator" />
            <div
                className="chatList__header"
            >
                <h3
                    style={{ paddingTop: "1px" }}
                >Contactes</h3>
                <div
                    className="chatList__actions"
                >
                    {iconList.map(Icon => (
                        <div style={{ position: "relative" }}>
                            <IconWrapper
                                height={32}
                                width={32}
                                transparent={true}
                                hoverable
                            >
                                <Icon />
                            </IconWrapper>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Header
