import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../account/context/AccountProvider'
import { formatDate } from '../../../utils/common-utils'

const Own = styled(Box)`
background:#dcf8c6;
max-width:60%;
margin:3px;
margin-left:auto;
padding: 5px;
width: fit-content;
display:flex;
border-radius:10px;
word-break:break-word;
`
const Received = styled(Box)`
background:#FFFFFF;
max-width:60%;
padding: 5px;
width: fit-content;
display:flex;
margin:3px;
border-radius:10px;
word-break:break-word;
`
const Text = styled(Typography)`
font-size:21px;
padding:0 25px 0 5px;
`
const Time = styled(Typography)`
font-size:14px;
color:#919191;
margin-top: 6px;
word-break: keep-all;
`

export const Message = ({message}) => {

    const {account,person} = useContext(AccountContext);

  return (
    <Box>
        {
            message.senderId==account.sub ? (
            <Own className='own message'>
                <Text className='ownText'>{message.text}</Text>
                <Time className='ownTime'>{formatDate(message.createdAt)}</Time>
            </Own>
            ) : (
            <Received className='received message'>
                <Text className='receivedText'>{message.text}</Text>
                <Time className='receivedTime'>{formatDate(message.createdAt)}</Time>
            </Received>
            )
        }
    </Box>
  )
}
