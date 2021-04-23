import React, { useEffect } from 'react'
import { InputBase } from '../../inputs/InputBase'
import { MdKeyboardBackspace } from "react-icons/md"
import { Transition } from 'react-transition-group'
import { ListItem } from '../../list-items/ListItem'
import { useClosePopover } from '../../Utils/useClosePopover'
import { IoMdClose } from 'react-icons/io'
import { IconWrapper } from '../../icons/iconWrapper'


interface searchResults {
    close?: () => void,
    open: boolean,
    popoverRef: any
}
export const SearchResults: React.FC<searchResults> = ({ close = () => { }, open, popoverRef }) => {

    useClosePopover({ popoverRef, action: close })


    return (
        <div className="searchResults">
            <div className="searchResults__header">

                <MdKeyboardBackspace onClick={close}
                    className="searchResults__backIcon"
                />
                <InputBase />
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

