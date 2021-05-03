import React, { useEffect, useState } from 'react'

export const useViewport = () => {

    const [viewport, setViewport] = useState([0, 0])
    useEffect(() => {
        setViewport([window.innerWidth, window.innerHeight])
        window.addEventListener("resize", updateViewport)
        return () => {
            window.removeEventListener("resize", updateViewport)
        }
    }, [])

    const updateViewport = () => {
        setViewport([window.innerWidth, window.innerHeight])
    }
    return (
        viewport
    )
}
