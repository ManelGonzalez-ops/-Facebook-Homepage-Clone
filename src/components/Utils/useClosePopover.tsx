import React, { useEffect } from 'react'

interface closePopopver {
    action: () => void,
    popoverRef: any
}
export const useClosePopover: React.FC<closePopopver> = ({ popoverRef, action }) => {
    const closeSearchPopover = (e: Event) => {
        if (!popoverRef.current) {
            return
        }
        if (!popoverRef.current.contains(e.target) 
        //&& (e.target as any) === "button"
        ) {
            action()
        }

    }
    useEffect(() => {
        document.addEventListener("mousedown", closeSearchPopover)
        return () => {
            document.removeEventListener("mousedown", closeSearchPopover)
        }
    }, [])
    return (
        <div>

        </div>
    )
}
