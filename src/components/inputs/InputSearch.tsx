import React from 'react'
import { InputBase, inputBase } from './InputBase'
import { GoSearch } from "react-icons/go"
interface inputProps {
    paddingLeft?: string
}
interface inputSearch {
    placeholder?: string
    inputProps?: inputProps
}
export const InputSearch: React.FC<inputSearch> = ({ placeholder = undefined, inputProps = {} }) => {
    return (
        <div
            className="inputSearch"
        >
            <InputBase {...{ placeholder }}
            customStyles={inputProps}
            />
            <div
                className="inputSearch__icon"
            >
                <GoSearch />
            </div>
        </div>
    )
}
