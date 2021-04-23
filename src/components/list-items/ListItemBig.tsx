import React, { ReactNode } from 'react'
import { IconWrapper } from '../icons/iconWrapper'
import { IoMdClose } from "react-icons/io"

type config = "image" | "icon"
interface customStyles {
    height?: string,
    width?: string
}
interface listItemImage {
    renderText: () => any,
    image?: ReactNode,
    endIcon?: ReactNode,
    type?: config,
    icon?: ReactNode,
    customStyles?: customStyles,
    dateInfo?: ReactNode
}

export const ListItemBig: React.FC<listItemImage> = ({ image,
    renderText,
    endIcon = null,
    type = "image",
    icon,
    customStyles = {},
    dateInfo = null
}) => {

    const getCustomStyles = () => {
        const styles = {}
        if (customStyles.height) {
            Object.assign(styles, { height: customStyles.height })
        }
        if (customStyles.width) {
            Object.assign(styles, { width: customStyles.width })
        }
        return styles
    }
    return (
        <div
            className="listItem--big"
            style={{ ...getCustomStyles() }}
        >
            {type === "icon"
                &&
                icon}

            {type === "image" && image}

            <p
                className="listItem__text"
            >
                {renderText()}
            </p>
            
            {dateInfo && dateInfo}

            {endIcon && endIcon}
        </div>
    )
}
