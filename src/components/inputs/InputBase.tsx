import React from 'react'

interface inputProps {
    paddingLeft?: string
}
export interface inputBase {
    placeholder?: string | undefined
    customStyles?: inputProps
}
export const InputBase: React.FC<inputBase> = ({ placeholder, customStyles = {} }) => {
    const getCustomStyles = () => {
        const styles = {}
        if (customStyles.paddingLeft) {
            Object.assign(styles, { paddingLeft: customStyles.paddingLeft })
        }
        return styles
    }
    return (
        <input type="text" className="inputRounded"
            placeholder={placeholder}
            style={{ ...getCustomStyles() }}
        />
    )
}
