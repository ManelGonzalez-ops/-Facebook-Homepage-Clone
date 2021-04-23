import React, { Dispatch, SetStateAction } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { IconWrapper } from '../../icons/iconWrapper'

interface configHeader {
    setViewId: Dispatch<SetStateAction<number>>,
    title: string
}
export const ConfigHeader: React.FC<configHeader> = ({ setViewId, title }) => {
    return (
        <div className="config__header">
            <IconWrapper
                height={36}
                width={36}
            >
                <MdKeyboardBackspace
                    onClick={() => { 
                        setViewId(1) }}
                />
            </IconWrapper>
            <h2 className="config__title">{title}</h2>
        </div>
    )
}
