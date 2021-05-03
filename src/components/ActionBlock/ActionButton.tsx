import React from 'react'
import { MdLiveTv } from "react-icons/md"
interface actionButton {
    text: string,
    customStyles?: any
}
export const ActionButton: React.FC<actionButton> = ({ text, customStyles = {} }) => {
    return (
        <div className="actionBlock__button"
            style={{ ...customStyles }}
        >
            <span style={{ marginRight: "8px" }}>
                <MdLiveTv style={{ fontSize: "24px" }} />
            </span>
            <h3
                style={{ fontSize: "15px" }}
            >{text}</h3>
        </div>
    )
}
