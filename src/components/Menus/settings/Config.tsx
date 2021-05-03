import React, { Dispatch, SetStateAction } from 'react'
import { CSSTransition, Transition, TransitionStatus } from 'react-transition-group'
import { ListItemBig } from '../../list-items/ListItemBig'
import { ListItem } from '../../list-items/ListItem'
import { IconWrapper } from '../../icons/iconWrapper'
import { MdKeyboardBackspace, MdSettings } from 'react-icons/md'
import { ConfigHeader } from './Header'
import { menuView } from '../Settings'
import { BsFillLockFill } from 'react-icons/bs'
import { AiFillHeart } from "react-icons/ai"
import { ImList } from "react-icons/im";
import { BiNews } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";


const LockComponsiteIcon = () => {
    return (
        <div
            className="icon__wrapperInner"
        >
            <BsFillLockFill style={{position: "absolute", left: "15%"}}/>
            <AiFillHeart
                style={{ position: "absolute", fontSize: "7px", left: "60%", top: "22%" }}
            />
        </div>
    )
}
export const Config: React.FC<menuView> = ({ handleGoBack, title }): any => {
    const listItems = [
        {
            Icon: MdSettings,
            title: "Configuració"
        },
        {
            Icon: LockComponsiteIcon,
            title: "Comprovació de privadesa"
        },
        {
            Icon: BsFillLockFill,
            title: "Accessos directes de privadesa"
        },
        {
            Icon: ImList,
            title: "Registre d'activitat"
        },
        {
            Icon: BiNews,
            title: "Preferencia en la provicio de noticies"
        },
        {
            Icon: MdLanguage,
            title: "Language"
        }
    ]
    return (

        <div className="config">
            <ConfigHeader {...{ handleGoBack, title }}
            />
            {listItems.map(({ title, Icon }, index) => (
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
