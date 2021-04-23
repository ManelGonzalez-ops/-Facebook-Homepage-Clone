import React, { ReactNode } from 'react'

interface textMultiline {
    title: string,
    subtitle: string | ReactNode
}
export const TextMultiline: React.FC<textMultiline> = ({ title, subtitle }) => {
    return (
        <div className="textItem-Multiline">
            <h4 className="textItem-Multiline__title">{title}</h4>
            <p className="textItem-Multiline__subtitle">{subtitle}</p>
        </div>
    )
}
export const TextMultilineBig: React.FC<textMultiline> = ({ title, subtitle }) => {
    return (
        <div className="textItem-Multiline--big">
            <h4 className="textItem-Multiline__title">{title}</h4>
            <h4 className="textItem-Multiline__subtitle">{subtitle}</h4>
        </div>
    )
}


interface modification {
    justifyContent?: string
}
interface textNotification {
    text: string
    footer: string | ReactNode
    modification?: modification
    dateInfo?: ReactNode
}
export const TextNotification: React.FC<textNotification> = ({ text, footer, modification = {}, dateInfo = null }) => {
    const getCustomStyles = () => {
        const styles = {}
        if (modification.justifyContent) {
            const { justifyContent } = modification
            Object.assign(styles, { justifyContent })
        }
        return styles
    }
    return (
        <div className="textItem-Multiline"
            style={{ ...getCustomStyles() }}
        >
            <p className="textItem-Multiline__text">{text}</p>
            {dateInfo ?
                <div className="textItem-Multiline__footerWrapper">
                    <h4 className="textItem-Multiline__text--sm--accent">{footer}</h4>
                    {dateInfo}
                </div>
                :
                <h4 className="textItem-Multiline__text--sm--accent">{footer}</h4>
            }
        </div>
    )
}

