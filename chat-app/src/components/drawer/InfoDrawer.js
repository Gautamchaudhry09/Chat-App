import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import { Profile } from './Profile';

const drawerStyle = {
  left:20,
  top:17,
  height: '95%',
  // width:'30%',
  // maxWidth: '100%',
  // minWidth:'400px',
  boxShadow:'none'
}

const Header = styled(Box)`
background: #008069;
height: 107px;
color: #FFFFFF;
display:flex;
& > svg, & > p {
  margin-top: auto;
  padding: 15px;
  font-weight:600;
}`


const Component = styled(Box)`
background: #ededed;
height:85%;
`

export const InfoDrawer = ({open, setOpen}) => {
  return (
    <>
    <Drawer
      open={open}
      onClose={()=>{setOpen(false)}}
      style={{
        zIndex:1500
      }}
      PaperProps={{sx: drawerStyle}}
    >
        <Header>
          <ArrowBackIcon onClick={()=>setOpen(false)} style={{cursor:'pointer'}}/>
          <Typography>Profile</Typography>
        </Header>
        <Component>
          <Profile/>
        </Component>
    </Drawer>
      </>

  )
}
