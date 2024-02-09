import React, { useState } from 'react'
import { Header } from './Header'
import { Search } from './Search'
import { Conversations } from './Conversations'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
const Component = styled(Box)`
max-width:390px;
width:390px;
box-sizing:border-box;
background:url('https://tse1.mm.bing.net/th?id=OIP.333HsLT7kujjsjJ0-ELmwwHaEK&pid=Api&P=0&h=180');
height:100%;
// transform: rotate(180deg);
// filter:invert(100%);
`
export const Menu = ({open,setOpen,loading,setLoading}) => {

  const [text,setText] = useState('');

  return (
    <Component>
        <Header open={open} setOpen={setOpen}/>
        <Search setText={setText}/>
        <Conversations text={text} loading={loading} setLoading={setLoading}/>
    </Component>
  )
}
