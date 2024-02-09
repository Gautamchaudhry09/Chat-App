import styled from '@emotion/styled'
import ArrowBack from '@mui/icons-material/ArrowBack'
import MoreVert from '@mui/icons-material/MoreVert'
import Search from '@mui/icons-material/Search'
import { Box, Typography } from '@mui/material'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import React, { useContext } from 'react'
import { AccountContext } from '../../account/context/AccountProvider'


const Header = styled(Box)`
height: 44px;
background: #ededed;
background: url('https://img.freepik.com/free-vector/stream-binary-code-design-vector_53876-161363.jpg?size=626&ext=jpg&ga=GA1.1.1703862845.1707377306&semt=sph');
padding: 18px 16px;
display:flex;
align-items: center;
overflow:hidden;
`
const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit:'cover',
    borderRadius:'50%'
});

const Name = styled(Typography)`
margin-left: 12px !important;
font-size:28px
word-break: keep-all;

`
const Status = styled(Typography)`
margin-left: 12px !important;
font-size: 15px;
color: rgb(0,0,0,0,.6);
`

const RightContainer = styled(Box)`
margin-left:auto;
& > svg {
    padding:8px;
    font-size: 24px;
    color: #000;
}`

const LeftContainer = styled(Box)`
padding:10px;
display:flex;
align-items:center;
& > * {
    marginLeft:10px;
    padding:8px;
    // font-size: 24px;
    color: #000;
}`

export const ChatHeader = ({person,open,setOpen}) => {

    const {activeUsers} = useContext(AccountContext);

  return (
    <Header className='chatHeader'>
        <LeftContainer>
            {
                open ? (
                    <></>
                    ):(
                    <QuestionAnswerOutlinedIcon onClick={()=>setOpen(true)}  style={{cursor: 'pointer',marginRight:'15px',filter:'invert(100%)'}}/>
                )
            }
            <Image src={person.picture} alt='dp'/>
            <Box>
                <Name className='personName'>{person.name}</Name>
                <Status className='status'>{activeUsers.find(user => user.sub == person.sub) ? ('Online'):('Offline')}</Status>
            </Box>
        </LeftContainer>
        <RightContainer>
            {/* <Search/> */}
            {/* <MoreVert/> */}
        </RightContainer>
    </Header>
  )
}
