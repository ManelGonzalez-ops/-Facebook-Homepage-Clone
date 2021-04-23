import React from 'react'

interface modification {
    marginLeft?: string
}
interface dotAccent {
    modification?: modification
}
export const DotAccent: React.FC<dotAccent> = ({ modification = {} }) => {
    const getCustomStyles = () => {
        const styles = {}
        if (modification.marginLeft) {
            const { marginLeft } = modification
            Object.assign(styles, { marginLeft })
        }
        return styles
    }
    return (
        <div className="menuNotifications__dot"
            style={{ ...getCustomStyles() }}
        />
    )
}
