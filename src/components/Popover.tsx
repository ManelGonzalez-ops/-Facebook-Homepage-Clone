import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ReactDOM from "react-dom"
import { Transition, TransitionStatus } from 'react-transition-group'

interface PopoverProps {
    children: (x: any) => ReactNode,
    stylesState: TransitionStatus,
    anchor: any,
    width?: string,
    padding?: string,
    top?: string,
    right?: string
}
export const Popover: React.FC<PopoverProps> = ({ children, stylesState, anchor, width = null, padding, top, right }) => {
    const popover = useRef(null)

    //define popover placement

    // const [{ top, left }, setAnchor] = useState({ top: 0, left: 0 })
    // const anchorPlacement = {
    //     top: top + "px",
    //     left: left + -50 + "px"
    // }

    const getCustomStyles = () => {
        const styles = {}
        if (width) {
            Object.assign(styles, { width })
        }
        if (padding) {
            Object.assign(styles, { padding })
        }
        if (right) {
            Object.assign(styles, { right })
        }
        if (top) {
            Object.assign(styles, { top })
        }
        return styles
    }

    // useEffect(() => {

    //     if (anchor.current) {
    //         setAnchor({
    //             top: anchor.current.getBoundingClientRect().top,
    //             left: anchor.current.getBoundingClientRect().left
    //         })
    //     }

    // }, [])

    return (ReactDOM.createPortal(<div ref={popover} className="popover-custom"
        style={{
            ...defaultStyles,
            ...transitionStyles[stylesState],
            //...anchorPlacement,
            ...getCustomStyles()
        }}
    >
        {children(popover)}
    </ div>,
        document.getElementById("popover") as HTMLElement

    ))
}

interface FadeProps {
    // children: (x: TransitionStatus) => ReactNode,
    children: any
    open: boolean
    anchor: any
    width?: string,
    padding?: string,
    top?: string,
    right?: string
}
export const Fade: React.FC<FadeProps> = ({ children, open, anchor, width, padding, top, right }) => (
    <Transition
        in={open}
        timeout={50}
        // addEndListener={(node, done) => {
        //     // use the css transitionend event to mark the finish of a transition
        //     node.addEventListener('transitionend', done, false);
        //   }}
        mountOnEnter
        unmountOnExit
    >

        {(animState) =>
            <Popover
                stylesState={animState}
                anchor={anchor}
                {...{width, padding, top, right}}
            >
                {(popoverRef: any) =>
                    children(popoverRef)
                }
            </Popover>}
    </Transition>
)

const defaultStyles = {
    transition: "all 0.1s ease",
    opacity: 0
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: {}
}