import React, { ContextType, useContext, useReducer, useState } from 'react'
const Context = React.createContext<any>("")

interface fakeData {
    posts: any
    imagesMain: any
    notifications: any
    messenger: any,
    chatList: any,
    loading: boolean,
}
interface context {
    data: fakeData,
    dispatch: any
}


const initialState = {
    posts: [],
    imagesMain: null,
    notifications: [],
    messenger: [],
    loading: true,
    chatList: null
}
const dataReducer = (state, action) => {
    switch (action.type) {
        case "SET_INIT_DATA":
            return {
                ...state,
                loading: false,
                posts: action.payload.slice(20, 25),
                imagesMain: action.payload.slice(5),
                notifications: action.payload.slice(5, 12),
                messenger: action.payload.slice(12, 20),
                chatList: action.payload.slice(50, 55)
            }
        case "ADD_POSTS":
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
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
