import React from 'react'
import {AppBar,Toolbar,styled,Box, Container } from "@mui/material"
import { useContext } from 'react'
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
export const Messenger = () => {

    const {account} = useContext(AccountContext);

  return (
    <Component>
        {
            account ? (
                <>
                {/* <LoginHeader> */}
                    {/* <Toolbar> */}
                    {/* </Toolbar> */}
                {/* </LoginHeader> */}
                <ChatDialog/>
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
