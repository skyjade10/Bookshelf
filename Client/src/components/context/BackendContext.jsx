
import React, { } from "react"

export const BackendContext = React.createContext()

export const BackendProvider = ({children}) => {

    const addBook = (title,isbn,category,row,cost,availabity) => {

    }
    const editBook = (title,isbn,category,row,cost,availabity) => {

    }

    return (
        <BackendContext.Provider value ={{addBook,editBook}}>
            {children}
        </BackendContext.Provider>
    )
}