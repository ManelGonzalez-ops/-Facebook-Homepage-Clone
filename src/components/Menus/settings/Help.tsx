import React, { Dispatch, SetStateAction } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { BsFillExclamationSquareFill } from 'react-icons/bs'
import { MdLocalPostOffice } from 'react-icons/md'
import { IconWrapper } from '../../icons/iconWrapper'
import { ListItem } from '../../list-items/ListItem'
import { menuView } from '../Settings'
import { ConfigHeader } from './Header'



//AiFillQuestionCircle
//MdLocalPostOffice
//BsFillExclamationSquareFill
export const Help: React.FC<menuView> = ({ handleGoBack, title }): any => {

    const listItems = [
        {
            title: "Centre d'ajuda",
            Icon: AiFillQuestionCircle
        },
        {
            title: "Bústia d'assistència",
            Icon: MdLocalPostOffice
        },
        {
            title: "Notifica un problema",
            Icon: BsFillExclamationSquareFill
        },
    ]
    return (

        <div className="config">
            <ConfigHeader {...{ handleGoBack, title }} />
            {listItems.map(({ Icon, title }, index) => (
                <ListItem
                    key={index}
                    renderText={() => title}
                    image={
                        <IconWrapper
                            height={36}
                            width={36}
                            marginRight={12}
                        >
                            <Icon />
                        </IconWrapper>
                    }
                />
            ))}
        </div>

    )
}
