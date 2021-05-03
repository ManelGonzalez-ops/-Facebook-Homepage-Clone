import React, { Dispatch, ReactNode } from 'react'

interface tabBaseProps {
    children: ReactNode,
    classname?: string,
    id?: any,
    setSelected?: Dispatch<React.SetStateAction<number>>
}
export const TabBase: React.FC<tabBaseProps> = React.forwardRef(({ children, classname=null, id = undefined, setSelected = () => null }, ref) => {
    return (
        <div
            id={id}
            className={`tab__base ${classname}`}
            onClick={() => { id && setSelected(id) }}
        >
            {children}
        </div>
    )
}
)