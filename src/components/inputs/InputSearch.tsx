import React, { Dispatch, useCallback, useEffect, useRef, useState } from 'react'
import { InputBase, inputBase } from './InputBase'
import { GoSearch } from "react-icons/go"
import { useViewport } from '../Utils/useViewport'
interface inputProps {
    paddingLeft?: string
}
interface inputSearch {
    placeholder?: string
    inputProps?: inputProps,
    focusOnHover?: any,
    iconHideInitial?: boolean,
    hideIconOnBlur?: boolean,
    showIcon: boolean
    setShowIcon: any
    inputVal: string
    setInputVal: any;
}
export const InputSearch: React.FC<inputSearch> = ({ placeholder = undefined, inputProps = {}, focusOnHover = (e: any) => null, iconHideInitial = false, hideIconOnBlur = false, showIcon, setShowIcon, inputVal, setInputVal }) => {
    
    const [iconHideStart, setIconHideStart] = useState(iconHideInitial)
    const input = useRef(null)
    const [width] = useViewport()
    const isSmallDevice = width < 1260
    useEffect(() => {
        if (input.current) {
            if(isSmallDevice){
                (input.current as any).focus()
            }
        }
    }, [width])


    return (
        <div
            className="inputSearch"
            onFocus={() => {
                setIconHideStart(false)
                setShowIcon(false)
            }}
            onBlur={() => { return hideIconOnBlur ? null : setShowIcon(true) }}
        >
            <div className={iconHideStart ? 
                "shrinker" : 
                showIcon ? "shrinker--on" : "shrinker"}></div>
            {/* <InputBase {...{ placeholder }}
                customStyles={inputProps}
            /> */}
            <input className="inputAnimated" type="text"
                placeholder="cerca a Messenger"
                ref={input}
                value={inputVal}
                onChange={(e)=>{setInputVal(e.target.value)}}
            />
            { !iconHideStart  &&
                <div
                    className={showIcon ? "inputSearch__icon" : "inputSearch__icon--hidden"}
                // className="inputSearch__icon"
                >
                    <GoSearch />
                </div>}
        </div>
    )
}
