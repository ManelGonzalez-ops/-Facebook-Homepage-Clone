import React, { Children, MouseEventHandler, ReactNode } from 'react'

interface iconWrapperProps {
    children: ReactNode,
    classname?: string,
    onClick?: MouseEventHandler<HTMLSpanElement>,
    height?: number,
    width?: number,
    ref?: any,
    marginRight?: number
}
export const IconWrapper: React.FC<iconWrapperProps> =

    React.forwardRef(({ children, classname, onClick = () => null, height, width, marginRight }, ref: any) => {

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
            return styles
        }

        return (
            <span
                className={`icon__wrapper ${classname}`}
                onClick={onClick}
                style={handleStyle()}
                ref={ref}
            >
                {children}
            </span>
        )
    })
