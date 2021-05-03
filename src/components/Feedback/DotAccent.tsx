import React, { ReactNode } from 'react'

interface modification {
    marginLeft?: string,
    backgroundColor?: string,
    border?: string,

}
interface dotAccent {
    modification?: modification
    children?: ReactNode
}
export const DotAccent: React.FC<dotAccent> = ({ modification = {}, children }) => {
    const getCustomStyles = () => {
        const styles = {}
        if (modification.marginLeft) {
            const { marginLeft } = modification
            Object.assign(styles, { marginLeft })
        }
        if (modification.backgroundColor) {
            const { backgroundColor } = modification
            Object.assign(styles, { backgroundColor })
        }
        if (modification.border) {
            const { border } = modification
            Object.assign(styles, { border })
        }
        return styles
    }
    if (!children) {
        return <div className="menuNotifications__dot"
            style={{ ...getCustomStyles() }}
        />
    }
    return (

        <div className="menuNotifications__dot--withText"
            style={{ height: "auto", width: "auto", ...getCustomStyles() }}
        >{children}</div>

    )
}
