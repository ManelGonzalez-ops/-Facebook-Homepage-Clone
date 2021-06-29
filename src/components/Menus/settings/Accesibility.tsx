import React, { Dispatch, SetStateAction, useState } from 'react'
import { AiOutlineFontSize } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { ImKeyboard } from 'react-icons/im'
import { IoIosArrowForward } from 'react-icons/io'
import { MdKeyboardBackspace } from 'react-icons/md'
import { IconWrapper } from '../../icons/iconWrapper'
import { ListItem } from '../../list-items/ListItem'
import { ListItemBig } from '../../list-items/ListItemBig'
import { RadioItem } from '../../list-items/RadioItem'
import { TextMultiline, TextMultilineBig } from '../../text-items/TextMultiline'
import { menuView, MenuViewWithNesting } from '../Settings'
import { ConfigHeader } from './Header'


//FaMoon
//AiOutlineFontSize
//GiFlexibleStar
//ImKeyboard
export const Accesibility: React.FC<MenuViewWithNesting> = ({ title, handleGoBack, handleGoForward }): any => {

    const [lightMode, setLightMode] = useState(false)
    const [compactMode, setCompactMode] = useState(false)
    return (

        <div className="config">
            <ConfigHeader {...{ handleGoBack, title }} />

            <ListItem
                renderText={() => <TextMultiline
                    title="Mode Fosc"
                    subtitle="Adjust the appearance of Facebook to reduce glare and give your eyes a break."
                />}
                image={
                    <IconWrapper
                        height={36}
                        width={36}
                        marginRight={12}
                    >
                        <FaMoon />
                    </IconWrapper>
                }
                customStyles={{ height: "auto",  padding: "12px 16px" }}
            />
            <div
                className="radio__section"
            >
                <RadioItem
                    text="Desactivat"
                    checked={!lightMode}
                    onChange={() => {
                        setLightMode(false)
                    }}
                />
                <RadioItem
                    text="Activat"
                    checked={lightMode}
                    onChange={() => {
                        setLightMode(true)
                    }}
                />
            </div>
            <ListItem
                renderText={() => <TextMultiline
                    title="Compact Mode"
                    subtitle="Make your font size smaller so more content can fit on the screen."
                />}
                image={
                    <IconWrapper
                        height={36}
                        width={36}
                        marginRight={12}
                    >
                        <AiOutlineFontSize />
                    </IconWrapper>
                }
                customStyles={{ height: "auto",  padding: "12px 16px" }}
            />
            <div
                className="radio__section"
            >
                <RadioItem
                    text="Desactivat"
                    checked={!compactMode}
                    onChange={() => {
                        setCompactMode(false)
                    }}
                />
                <RadioItem
                    text="Activat"
                    checked={compactMode}
                    onChange={() => {
                        setCompactMode(true)
                    }}
                />
            </div>
            <ListItem
                renderText={() => "Teclat"}
                image={
                    <IconWrapper
                        height={36}
                        width={36}
                        marginRight={12}
                    >
                        <ImKeyboard />
                    </IconWrapper>
                }
                endIcon={
                    <IoIosArrowForward
                        style={{ transform: "scale(1.5)" }}
                        onClick={() => { handleGoForward(5) }}
                        className="icon--centered"
                    />
                }
                customStyles={{ height: "auto",  padding: "12px 16px" }}
            />
        </div>

    )
}
