import React, { useEffect, useState } from 'react'
import { InputBase } from '../../inputs/InputBase'
import { MdKeyboardBackspace } from "react-icons/md"
import { Transition } from 'react-transition-group'
import { ListItem } from '../../list-items/ListItem'
import { useClosePopover } from '../../Utils/useClosePopover'
import { IoMdClose } from 'react-icons/io'
import { IconWrapper } from '../../icons/iconWrapper'
import { InputSearch } from '../../inputs/InputSearch'


interface searchResults {
    close?: () => void,
    open: boolean,
    popoverRef: any,
    inputVal: string
    setInputVal: any
}
export const SearchResults: React.FC<searchResults> = ({ close = () => { }, open, popoverRef, inputVal, setInputVal }) => {

    useClosePopover({ popoverRef, action: close })
    const [showIcon, setShowIcon] = useState(true)

    return (


        <div className="searchResults">
            <div className="searchResults__header">
                <div className="goBack--wrapper">
                    <MdKeyboardBackspace onClick={close}
                        className="searchResults__backIcon"
                    />
                </div>
                <div
                    className="inputSearch__wrapper"
                >
                    <InputSearch
                        iconHideInitial={true}
                        key={8}
                        {...{ showIcon, setShowIcon }}
                        {...{ inputVal, setInputVal }}
                    />
                </div>
            </div>
            <div className="searchResults__subheader">
                <h4>Cerques Cecents</h4>
                <a href="#">Edita</a>
            </div>
            <div className="searchResults__body">
                {[...Array(4)].map((_, index) => (
                    <ListItem key={index}
                        renderText={() => "Julia Pavan"}
                        image={< img
                            className="listItem__image"
                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />}
                        endIcon={
                            <IconWrapper
                                height={28}
                                width={28}
                            >
                                <IoMdClose />
                            </IconWrapper>
                        }
                    />
                ))}
            </div>
        </div>

    )
}

