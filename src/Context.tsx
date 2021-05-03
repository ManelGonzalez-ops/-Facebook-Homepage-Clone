import React, { ContextType, useContext, useReducer, useState } from 'react'
const Context = React.createContext<any>("")

interface fakeData {
    posts: any
    imagesMain: any
    notifcations: any
    messenger: any,
    loading: boolean
}
interface context {
    data: fakeData,
    dispatch: any
}


const initialState = {
    posts: [],
    imagesMain: [],
    notifcations: [],
    messenger: [],
    loading: true
}
const dataReducer = (state, action) => {
    console.log(action, "action")
    switch (action.type) {
        case "SET_INIT_DATA":
            return {
                ...state,
                loading: false,
                posts: action.payload.slice(20, 50),
                imagesMain: action.payload.slice(5),
                notifications: action.payload.slice(5, 12),
                messenger: action.payload.slice(12, 20)
            }
        default:
            return state
    }
}
export const ContextProvider = ({ children }) => {
    const [data, dispatch] = useReducer<any>(dataReducer, initialState)
    return (
        <Context.Provider value={{ data, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export const useFakeData = (): context => useContext(Context)
