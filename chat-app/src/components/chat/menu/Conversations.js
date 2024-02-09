import React, { useEffect, useState } from 'react'
import { getUsers, setConversation } from '../../../service/api'
import { Box, Divider } from '@mui/material';
import { Conversation } from './Conversation';
import { useContext } from 'react';
import { AccountContext } from '../../account/context/AccountProvider';
import styled from '@emotion/styled';

const Component = styled(Box)`
height: 81vh;

overflow:overlay;
`

const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
background-color: #e9edef;
opacity:0.6;
`

export const Conversations = ({text,loading,setLoading}) => {

    const [users,setUsers] = useState([]);
    const {account,setActiveUsers,socket,person} = useContext(AccountContext);

    useEffect(()=> {

        const fetchData = async () => {
            let res = await getUsers(); 
            const filteredData = res.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
            // console.log(users);
        }
        
        
        fetchData();
    },[text]);
    
    useEffect(()=>{
        const makeConversations = async() => {
            users.filter((user) => user.sub!==account.sub)
            .map(async(user)=>{
                await setConversation({senderId: account.sub, receiverId: user.sub })
            })
        }
        makeConversations();

    },[account]);



    useEffect(()=> {
        socket.current.emit('addUsers',account)
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    },[account,person])

  return (
    <Component>
        {
            users.filter(user => user.sub!==account.sub).map(user=>(
                <>
                    <Conversation user={user} loading={loading} setLoading={setLoading}/>
                    <StyledDivider/>
                </>
            ))
        }
    </Component>
  )
}
