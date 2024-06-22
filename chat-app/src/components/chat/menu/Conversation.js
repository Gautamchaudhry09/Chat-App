import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../account/context/AccountProvider'
import { getConversation, setConversation } from '../../../service/api'
import { formatDate } from '../../../utils/common-utils'

const Component = styled(Box)`
display:flex;
background:url('https://tse3.mm.bing.net/th?id=OIP.JzYnBC0fs2t3n6tKfcQ6CgHaEK&pid=Api&P=0&h=180');
max-width:390px;
height: 50px;
padding:13px 0;
margin: 5px 0px;

cursor: pointer;
`

const Image = styled('img')({
    width: 50,
    height:50,
    borderRadius:'50%',
    padding: '0 14px '
})

const Container = styled(Box)`
    display: flex;
    flex-direction:column;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    margin: -19px 0px 11px 17px;
`;

export const Conversation = ({user,loading,setLoading}) => {

    const {setPerson,account,socket} = useContext(AccountContext);
    // const [incomingMessage,setIncomingMessage] = useState(null);
    const [message, setMessage] = useState({});

    const getUser = async () => {
        setLoading(true);
        await setConversation({senderId: account.sub, receiverId: user.sub })
        setPerson(user);
        setLoading(false);
    }

    useEffect(() => {
        const getConversationMessage = async() => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }
        getConversationMessage();
    },[socket]);

//     useEffect(() => {
//     socket.current.on('getMessage',data => {
//       setIncomingMessage({
//         ...data,
//         createdAt: Date.now()
//       })
//     })
//   },[])

  return (
    <Component onClick={getUser}>
        <Box>
            <Image src={user.picture} alt='dp'/>
        </Box>
        <Box style={{width: '100%'}}>
             <Container >
                <Typography className='personName'>{user.name}</Typography>
                { 
                    message?.text && 
                    <Timestamp className='latestTime'>{formatDate(message?.timestamp)}</Timestamp>        
                }
                </Container>
        <Box style={{paddingBottom:'11px'}}>
                {
                    // incomingMessage.
                }
                    <Text className='latestMessage'>{message?.text}</Text>

        </Box>
        </Box>
        {/* <Box>
            <Typography>{user.name}</Typography>
        </Box> */}
    </Component>
  )
}
