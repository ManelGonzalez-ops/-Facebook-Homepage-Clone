import React, { Children, MouseEventHandler, ReactNode } from 'react'

interface iconWrapperProps {
    children: ReactNode,
    classname?: string,
    onClick?: MouseEventHandler<HTMLSpanElement>,
    height?: number,
    width?: number,
    ref?: any,
    marginRight?: number,
    position?: string,
    onMouseOver?: MouseEventHandler<HTMLSpanElement>,
    transparent?: boolean
    hoverable?: boolean
}
export const IconWrapper: React.FC<iconWrapperProps> =

    React.forwardRef(({ children, classname, onClick = () => null, height, width, marginRight, position, onMouseOver = () => null, transparent = false, hoverable = false }, ref: any) => {

        const handleStyle = () => {
            const styles = {}
            if (height) {
                Object.assign(styles, { height: height + "px" })
            }
            if (width) {
                Object.assign(styles, { width: width + "px" })
            }
            if (marginRight) {
                Object.assign(styles, { marginRight: marginRight + "px" })
            }
            if (position === "absolute") {
                Object.assign(styles, {
                    position,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                })
            }
            return styles
        }

        return (
            <span
                className={
                    `icon__wrapper 
                ${hoverable ? "hoverable" : false}
                ${transparent ? "icon__wrapper--transparent" : false}
                ${classname}`}
                onClick={onClick}
                style={handleStyle()}
                ref={ref}
                onMouseOver={onMouseOver}
            >
                {children}
            </span>
        )
    })
