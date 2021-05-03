import React from 'react'

interface radioItem {
    onChange: () => void,
    text: string,
    checked: boolean
}
export const RadioItem: React.FC<radioItem> = ({ text, checked, onChange }) => {
    return (
        <div
            className="radioItem"
        >
            <p>
                {text}
            </p>
            <label
                className="radioInput__container"
            >
                <input type="radio" checked={checked}
                    onChange={onChange}
                />
                <div className="radioInput__checkmark" />
            </label>
        </div>
    )
}
