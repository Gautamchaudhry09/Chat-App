import styled from '@emotion/styled';
import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { AccountContext } from '../../account/context/AccountProvider';
import { ChatFooter } from './ChatFooter';
import { getMessages, newMessage } from '../../../service/api';
import { Message } from './message';
// import { Loader } from '../../loading/Loader';
import {PacmanLoader} from 'react-spinners'

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
height: calc(98vh - 65px);
// height:85svh;
`

const Component = styled(Box)`
  overflow:auto;
  // background-color:#6f6f6f;
  padding-bottom:5px;
`

const SearchWrapper = styled(Box)`
// align-self:flex-end;
margin-top:auto;
position: absolute;
bottom: 0;
// padding-bottom:15px;
`

const Container = styled(Box)`
padding: 1px 80px;
`
const MessageContainer = styled(Box)`
padding: 0 5px 0;
margin:1px 15px 0 15px;
`

export const Messages = ({person,conversation,loading,setLoading}) => {

  const {account,socket,activeUsers} = useContext(AccountContext);
  const [messages,setMessages] = useState([]);
  const [value,setValue] = useState('');
  const [file,setFile] = useState([]);
  const [incomingMessage,setIncomingMessage] = useState(null);
  const scrollRef = useRef();

  const enterSendText=(e)=>{
    const code = e.keycode||e.which;
  
    if(code===13 && value) {
      sendText();
    }
    
  }

    const sendText = async() => {
      if(value){
        let  message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type:'text',
          text: value,
          createdAt: Date.now()
        }
      setMessages(prev => [...prev, message] );

      socket.current.emit('sendMessage',message);
      console.log(activeUsers);
      setValue('');
      await newMessage(message);
    }
}



  useEffect(() => {
    socket.current.on('getMessage',data => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      })
      console.log("vuv");
    })
  },[])

  useEffect(()=>{

    if(incomingMessage ){

      setMessages(messages => [...messages, incomingMessage]);

    }

  },[incomingMessage])
  
  useEffect(()=>{
    const getMessageDetails = async () => {
      setLoading(true);
      let data = await getMessages(conversation._id);
      // console.log(data);
      setMessages(data);
      setLoading(false);
    }
    if(conversation){
      getMessageDetails();
    }
  },[conversation._id])

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({ transition:'smooth' })
  },[messages])

  return (
    <>
      <Wrapper>
      <Component className='MessageContainer'>
        {
          loading ? (
            <>
            <PacmanLoader color="#36d7b7" />
            </>
          ) : (
            <>
            </>
          )
        }
        {
          messages && messages.map((message) => (
            <MessageContainer  ref={scrollRef}>
              <Message message={message}/>
            </MessageContainer>
          ))
        }
      </Component>
      <SearchWrapper>
        <ChatFooter setValue={setValue} sendText={sendText} enterSendText={enterSendText} value={value} file={file} setFile={setFile} />
      </SearchWrapper>
      </Wrapper>
    </>
  )
}
