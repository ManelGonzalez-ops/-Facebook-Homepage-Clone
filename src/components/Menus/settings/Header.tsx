import React, { Dispatch, SetStateAction } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { IconWrapper } from '../../icons/iconWrapper'

interface configHeader {
    title: string,
    parentMenuId?: number
    handleGoBack: () => void
}
export const ConfigHeader: React.FC<configHeader> = ({ title, handleGoBack }) => {
    return (
        <div className="config__header">
            <IconWrapper
                height={36}
                width={36}
            >
                <MdKeyboardBackspace
                    onClick={handleGoBack}
                />
            </IconWrapper>
            <h2 className="config__title">{title}</h2>
        </div>
    )
}
