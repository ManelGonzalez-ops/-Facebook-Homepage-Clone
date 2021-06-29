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
import { DotAccent } from "../Feedback/DotAccent"
import userEvent from '@testing-library/user-event'
import { useFakeData } from '../../Context'
interface menuNotifications {
    popoverRef?: any,
    close: () => void,
    viewId: number,
    setViewId: Dispatch<SetStateAction<number>>,
}
export const Notifications: React.FC<menuNotifications> = ({ close, popoverRef, viewId, setViewId }) => {
    useClosePopover({ popoverRef, action: close })
    const { data: { notifications, loading } } = useFakeData()
    if (loading) {
        return <div>loading</div>
    }
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
                isHoverable
                renderText={() => "Has engegat una sessió com a TalentForJobs el 19 d’abr. 2021, 12:09. No eres pas tu? Pots eliminar el programa."}
                textStyles={{paddingRight: "12px"}}
                type="image"
                image={
                    <ImageWithBadge
                        image={<img
                            className="listItem--big__image"
                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />}
                        badgeIcon={
                            <IconWrapper
                                height={32}
                                width={32}
                            >
                                <BiVideoRecording />
                            </IconWrapper>}
                    />
                }
                endIcon={<DotAccent />}
            />
            <SubHeader text="Anteriors" />
            {notifications.length && notifications.map((user, index) =>

                <ListItemBig
                    isHoverable
                    key={index}
                    renderText={() => <TextNotification
                        text={user.text.length > 72 ? user.text.slice(0, 72) : user.text}
                        footer="Fa 3 hores"
                        modification={{paddingRight: "12px"}}
                    />}
                    type="image"
                    image={
                        <ImageWithBadge
                            image={<img
                                className="listItem--big__image"
                                src={user.userImage} />}
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


