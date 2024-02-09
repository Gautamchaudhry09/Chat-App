import { Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import styled from '@emotion/styled';


const Component = styled(Box)`
height:55px;
padding:10px 15px 5px 15px;
margin-top:10px;
// background-color: grey;
border-bottom: 1px solid rgb(230, 154, 255);
`

const Wrapper = styled(Box)`
background-color: #f0f2f5;
// margin:0 4px;
width:100%;
border-radius:10px

`

const Icon = styled(Box)`
position: absolute;
height: 100%;
padding:8px 15px;
color: #919191;
`

const InputField = styled(InputBase)`
width:100%;
padding:16px;
padding-left:65px;
height:35px;
font-weight: 600;
font-size:16px;
`

export const Search = ({setText}) => {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon
                    fontSize="small"
                    />
            </Icon>
            <InputField
             placeholder='Search Chats'
             onChange={(e)=> setText(e.target.value)}
             />
        </Wrapper>
    </Component>
  )
}
