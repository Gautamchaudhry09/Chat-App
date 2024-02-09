import React, { useEffect, useState } from 'react'
import { ChatHeader } from './ChatHeader'
import { ChatFooter } from './ChatFooter'
import { Messages } from './Messages'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { useContext } from 'react'
import { AccountContext } from '../../account/context/AccountProvider'
import { getConversation } from '../../../service/api'

const Component = styled(Box)`
background-image: url(https://img.freepik.com/free-vector/matrix-style-binary-code-digital-background-with-falling-numbers_1017-25336.jpg?w=900&t=st=1707377360~exp=1707377960~hmac=6441548470f5eb85c9fdd885d46b429ffa28240dec64d7d4446da2b94b10a58c);

height:100vh;
box-sizing: border-box;
// overflow:hidden;
// overflow-y:scroll;

`

export const ChatBox = ({open,setOpen,loadingConvo,setLoadingConvo}) => {


    const {person,account} = useContext(AccountContext);

    const[conversation,setConversation] = useState({});


    useEffect(()=>{

        const getConversationDetails = async()=>{
            setLoadingConvo(true);
            let data = await getConversation({senderId:account.sub,receiverId:person.sub})
            setConversation(data);
            setLoadingConvo(false);
        }
        getConversationDetails();
        
    },[person.sub])

  return (
    <Component>
        <ChatHeader person={person} open={open} setOpen={setOpen}/>
        <Messages person={person} conversation={conversation} loading={loadingConvo} setLoading={setLoadingConvo}/>
    </Component>
  )
}
