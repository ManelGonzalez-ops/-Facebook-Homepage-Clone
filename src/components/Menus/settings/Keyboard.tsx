import React, { useState } from 'react'
import { ListItem } from '../../list-items/ListItem'
import { menuView } from '../Settings'
import { ConfigHeader } from './Header'
import { MdKeyboardBackspace } from 'react-icons/md'
import { TextMultiline } from '../../text-items/TextMultiline'
import { IconWrapper } from '../../icons/iconWrapper'
import { FaMoon } from 'react-icons/fa'
import { ImKeyboard } from 'react-icons/im'
import { RadioItem } from '../../list-items/RadioItem'

export const Keyboard: React.FC<menuView> = ({ title, handleGoBack }) => {
    const [shortcuts, setShortcuts] = useState(false)
    return (
        <div className="config">
            <ConfigHeader {...{ title, handleGoBack }}
                parentMenuId={4}
            />
            <ListItem
                renderText={() => "See All Keyboard Shortcuts"}
                image={
                    <IconWrapper
                        height={36}
                        width={36}
                        marginRight={12}
                    >
                        <ImKeyboard />
                    </IconWrapper>
                }
                customStyles={{ height: "auto", padding: "12px 16px" }}
            />
            <ListItem
                renderText={() => <TextMultiline
                    title="Use Single-Character Keyboard Shortcuts"
                    subtitle="Use single-character shortcuts to perform common actions."
                />}
                image={
                    <IconWrapper
                        height={36}
                        width={36}
                        marginRight={12}
                    >
                        <ImKeyboard />
                    </IconWrapper>
                }
                customStyles={{ height: "auto", padding: "12px 16px" }}
            />

            <div
                className="radio__section"
            >
                <RadioItem
                    text="Desactivat"
                    checked={!shortcuts}
                    onChange={() => {
                        setShortcuts(false)
                    }}
                />
                <RadioItem
                    text="Activat"
                    checked={shortcuts}
                    onChange={() => {
                        setShortcuts(true)
                    }}
                />
            </div>

        </div>
    )
}
