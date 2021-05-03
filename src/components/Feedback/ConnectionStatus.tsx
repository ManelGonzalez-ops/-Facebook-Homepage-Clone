import React, { ReactNode } from 'react'

interface modification {
    marginLeft?: string,
    color?: string,
    border?: string,

}
interface connStatus {
    modification?: modification
    children?: ReactNode
}
export const ConnStatus: React.FC<connStatus> = ({ modification = {}, children }) => {
    const getCustomStyles = () => {
        const styles = {}
        if (modification.marginLeft) {
            const { marginLeft } = modification
            Object.assign(styles, { marginLeft })
        }
        if (modification.color) {
            const { color } = modification
            Object.assign(styles, { color })
        }
        if (modification.border) {
            const { border } = modification
            Object.assign(styles, { border })
        }
        return styles
    }
    if (!children) {
        return <div className="feedback"
            style={{ ...getCustomStyles() }}
        />
    }
    return (

        <div className="feedback--"
            style={{ ...getCustomStyles() }}
        >{children}</div>

    )
}
