import React, { ReactNode } from 'react'
import { IconWrapper } from '../icons/iconWrapper'
import { IoMdClose } from "react-icons/io"

type config = "icon" | "image"

interface customStyles {
    height?: string,
    width?: string
}
interface listItemImage {
    renderText: () => any,
    image?: ReactNode,
    endIcon?: ReactNode,
    type?: config,
    icon?: ReactNode
    customStyles?: customStyles,
}

export const ListItem: React.FC<listItemImage> = ({
    image,
    renderText,
    endIcon = null,
    type = "image",
    icon,
    customStyles = {},

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
            className="listItem"
            style={{ ...getCustomStyles() }}
        >
            {type === "icon" && <div className="listItem__icon">{icon}</div>}
            {type === "image" && image}
            <p
                className="listItem__text"
            >
                {renderText()}
            </p>
            {endIcon && endIcon}

        </div>
    )
}
