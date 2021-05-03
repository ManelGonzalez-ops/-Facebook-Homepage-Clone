import React from 'react'
import { MdVideoCall } from "react-icons/md"
import { IconWrapper } from '../icons/iconWrapper'
import { Separator } from '../Utils/Separator'
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
                    {[...Array(3)].map(_ => (
                        <div style={{ position: "relative" }}>
                            <MdVideoCall />
                            <IconWrapper
                                height={28}
                                width={28}
                                position="absolute"
                            >
                            </IconWrapper>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Header
