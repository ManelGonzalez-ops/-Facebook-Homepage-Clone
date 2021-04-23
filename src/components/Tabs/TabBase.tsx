import React, { ReactNode } from 'react'

interface tabBaseProps {
    children: ReactNode,
    classname?: string
}
export const TabBase: React.FC<tabBaseProps> = ({ children, classname }) => {
    return (
        <span className={`tab__base ${classname}`}>
            {children}
        </span>
    )
}
