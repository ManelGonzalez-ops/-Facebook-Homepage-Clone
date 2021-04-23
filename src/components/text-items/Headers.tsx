import React from 'react'

interface Header {
    text: string
}
export const Header: React.FC<Header> = ({ text }) => {
    return (
        <h1
            className="textHeader"
        >
            {text}
        </h1>
    )
}
export const SubHeader: React.FC<Header> = ({ text }) => {
    return (
        <h3
            className="textSubheader"
        >
            {text}
        </h3>
    )
}
