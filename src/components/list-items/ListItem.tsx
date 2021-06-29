import React, { ReactNode } from 'react'
import { IconWrapper } from '../icons/iconWrapper'
import { IoMdClose } from "react-icons/io"

type config = "icon" | "image"

interface customStyles {
    height?: string,
    width?: string,
    padding?: string,
    alignItems?: string
}
interface listItemImage {
    renderText: () => any,
    image?: ReactNode,
    endIcon?: ReactNode,
    type?: config,
    icon?: ReactNode
    customStyles?: customStyles,
    classname?: string,
    isHoverable?: boolean
}

export const ListItem: React.FC<listItemImage> = ({
    image,
    renderText,
    endIcon = null,
    type = "image",
    icon,
    customStyles = {},
    classname = null,
    isHoverable = true
}) => {
    const getCustomStyles = () => {
        const styles = {}
        if (customStyles.height) {
            Object.assign(styles, { height: customStyles.height })
        }
        if (customStyles.width) {
            Object.assign(styles, { width: customStyles.width })
        }
        if (customStyles.padding) {
            Object.assign(styles, { padding: customStyles.padding })
        }
        if (customStyles.alignItems) {
            Object.assign(styles, { alignItems: customStyles.alignItems })
        }
        return styles
    }

    return (
        <div
            className=
            {
                `listItem 
            ${isHoverable ? "hoverable-tab" : ""} 
            ${classname}`
        }
            style={{ ...getCustomStyles() }}
        >
            {type === "icon" && <div className="listItem__icon">{icon}</div>}
            {type === "image" && image}
            <div
                className="listItem__text"
            >
                {renderText()}
            </div>
            {endIcon && endIcon}

        </div>
    )
}
