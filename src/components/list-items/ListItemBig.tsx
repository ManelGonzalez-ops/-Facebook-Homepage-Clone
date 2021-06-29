import React, { ReactNode } from 'react'
import { IconWrapper } from '../icons/iconWrapper'
import { IoMdClose } from "react-icons/io"

type config = "image" | "icon"
interface customStyles {
    height?: string,
    width?: string,
    padding?: string | number,
    border?: string
}
interface listItemImage {
    renderText: () => any,
    image?: ReactNode,
    endIcon?: ReactNode,
    type?: config,
    icon?: ReactNode,
    customStyles?: customStyles,
    dateInfo?: ReactNode
    isHoverable?: boolean,
    textStyles?: any
}

export const ListItemBig: React.FC<listItemImage> = ({ image,
    renderText,
    textStyles = {},
    endIcon = null,
    type = "image",
    icon,
    customStyles = {},
    dateInfo = null,
    isHoverable = true,
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
        if (customStyles.border) {
            Object.assign(styles, { border: customStyles.border })
        }
        return styles
    }
    return (
        <div
            className={`listItem--big
            ${isHoverable ? "hoverable-tab" : ""} 
            `
            }
            style={{ ...getCustomStyles() }}
        >
            {type === "icon"
                &&
                icon}

            {type === "image" && image}

            <p
                className="listItem__text"
                style={{...textStyles}}
            >
                {renderText()}
            </p>

            {dateInfo && dateInfo}

            {endIcon && endIcon}
        </div>
    )
}
