import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { IconWrapper } from '../../icons/iconWrapper'

export const Config = () => {
    return (
        <div
            className="config"
        >
            <div
                className="config__header"
            >
                <IconWrapper
                    height={36}
                    width={36}
                >
                    <MdKeyboardBackspace
                    />
                </IconWrapper>
                <h2 className="config__title">Configuració i Privacitat</h2>
            </div>
        </div>
    )
}
