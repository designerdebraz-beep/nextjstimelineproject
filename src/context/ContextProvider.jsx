"use client"
import React, { createContext, useState } from 'react';

export const fdsContext = createContext(null)

const ContextProvider = ({children}) => {

    const [data , setData] = useState([])
    const fdsData = {
        data, setData
    }
    
    return <fdsContext.Provider value={fdsData}>{children}</fdsContext.Provider>
};

export default ContextProvider;