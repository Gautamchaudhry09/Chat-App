import React from 'react'
import {AppBar,Toolbar,styled,Box, Container } from "@mui/material"
import { useContext,useEffect } from 'react'
import { AccountContext } from './account/context/AccountProvider'
import { ChatDialog } from './chat/ChatDialog'
import { LoginDialog } from './account/LoginDialog'


const LoginHeader = styled(AppBar)`
    height: 225px;
    background-color: orange;
    box-shadow: none;
`
const Component = styled(Box)`
    height : 100vh;
    background-color: grey;
    width:100%;
`
const Chat = styled(Box)`
    height : 80%;
`
export const Messenger = () => {
    const {account,setAccount} = useContext(AccountContext);
    useEffect(()=>{
    //     const token=localStorage.getItem('token');
    const token=localStorage.getItem('token');
        if(token){
            console.log(JSON.parse(token));
            setAccount(JSON.parse(token));
        }
    },[])
    
  return (
    <Component>
        {
            account ? (
                <>
                {/* <LoginHeader> */}
                    {/* <Toolbar> */}
                    {/* </Toolbar> */}
                {/* </LoginHeader> */}
                <Chat>
                    <ChatDialog/>
               </Chat>
                </>
            ) : (
                <>
                <LoginHeader>
                    <Toolbar>
                    </Toolbar>
                </LoginHeader>
                <LoginDialog/>
                </>
        )}
    </Component>
  )
}
