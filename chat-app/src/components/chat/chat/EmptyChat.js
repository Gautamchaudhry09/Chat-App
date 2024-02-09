import styled from '@emotion/styled';
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Component =styled(Box)`
background: #f8f9fa;
padding: 30px 0;
text-align: center;
display:flex;
justify-content:center;
height: 100vh;
`

const Container = styled(Box)`
padding: 0 200px;
min-width:400px
`   
const Image = styled('img')({
    width:'100%',
    marginTop:100
})

const Title = styled(Typography)`
font-size: 32px
margin:25px 0 10px 0
color: #42525d;
font-weight: 300;
font-family: inherit;
`
const SubTitle = styled(Typography)`
font-size: 14px;
color: #667781;
font-weight: 400;
font-family: inherit;
`

const StyledDivider = styled(Divider)`
margin: 40px 0;
`

export const EmptyChat = () => {
    const imgurl = 'https://tse4.mm.bing.net/th?id=OIP.ZyglAEYRDBKR6QZrLhDG9QHaC9&pid=Api&P=0&h=180'
  return (
    <Component>
        <Container>
            <Image src={imgurl}/>
            <Title>Chatify Online</Title>
            <SubTitle>Send and Receive messages from your friends</SubTitle>
            <SubTitle>Have fun Chatting</SubTitle>
            <StyledDivider/>
        </Container>
    </Component>
  )
}
