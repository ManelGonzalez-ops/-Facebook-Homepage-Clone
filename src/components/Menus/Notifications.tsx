import React, { Dispatch, SetStateAction } from 'react'
import { FiMoreHorizontal } from "react-icons/fi"
import { ListItem } from '../list-items/ListItem'
import { ListItemBig } from '../list-items/ListItemBig'
import { ImageWithBadge } from '../media/ImageWithBadge'
import { Header, SubHeader } from '../text-items/Headers'
import { BiVideoRecording } from "react-icons/bi"
import { IconWrapper } from '../icons/iconWrapper'
import { TextNotification } from '../text-items/TextMultiline'
import { useClosePopover } from '../Utils/useClosePopover'
import {DotAccent} from "../Feedback/DotAccent"
interface menuNotifications {
    popoverRef?: any,
    close: () => void,
    viewId: number,
    setViewId: Dispatch<SetStateAction<number>>,
}
export const Notifications: React.FC<menuNotifications> = ({ close, popoverRef, viewId, setViewId }) => {
    useClosePopover({ popoverRef, action: close })
    return (
        <div
            className="menuNotifications"
        >
            <div
                className="menuNotifications__header"
            >
                <Header text="Avisos" />
                <FiMoreHorizontal
                    className="menuNotifications__headerIcon"
                />
            </div>
            <SubHeader text="Noves" />
            <ListItemBig
                renderText={() => "Has engegat una sessió com a TalentForJobs el 19 d’abr. 2021, 12:09. No eres pas tu? Pots eliminar el programa."}
                type="image"
                image={
                    <ImageWithBadge
                        image={<img
                            className="listItem--big__image"
                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />}
                        badgeIcon={
                            <IconWrapper
                                height={28}
                                width={28}
                            >
                                <BiVideoRecording />
                            </IconWrapper>}
                    />
                }
                endIcon={<DotAccent />}
            />
            <SubHeader text="Anteriors" />
            {[...Array(5)].map((_, index) =>

                <ListItemBig
                    key={index}
                    renderText={() => <TextNotification
                        text="Has engegat una sessió com a TalentForJobs el 19 d’abr. 2021, 12:09. "
                        footer="Fa 3 hores"
                    />}
                    type="image"
                    image={
                        <ImageWithBadge
                            image={<img
                                className="listItem--big__image"
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />}
                            badgeIcon={
                                <IconWrapper
                                    height={28}
                                    width={28}
                                >
                                    <BiVideoRecording />
                                </IconWrapper>}
                        />
                    }
                    endIcon={<DotAccent />}
                    customStyles={{ height: "auto" }}
                />)}
        </div>
    )
}


