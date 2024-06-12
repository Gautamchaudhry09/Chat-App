import { createContext, useEffect, useRef, useState } from "react";
import React from 'react'
import io from 'socket.io-client'

export const AccountContext = createContext(null);

export const AccountProvider = ({children}) => {
    
    const [account,setAccount] = useState();
    const [person,setPerson] = useState({});
    const [activeUsers,setActiveUsers] = useState([]);
    

    const socket = useRef();

    useEffect(()=>{
      socket.current = io('wss://chat-app-socket-server-twkp.onrender.com')
    },[person])

  return (
    <AccountContext.Provider value={{
        account,setAccount,
        person,setPerson,
        socket,
        activeUsers,setActiveUsers
    }}>
        {children}
    </AccountContext.Provider>
  )
}
