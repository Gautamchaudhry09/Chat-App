import React, { useContext, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import styled from '@emotion/styled';
import { googleLogout } from '@react-oauth/google';
import { AccountContext } from '../../account/context/AccountProvider';


    const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A`

export const HeaderMenu = ({setOpenDrawer}) => {

    const [open, setOpen] = useState(null);
    const {socket,account} = useContext(AccountContext);

    const handleClose = () => {
        setOpen(null);
        setOpenDrawer(true);
    }

    const handleClick = (event) => {
    setOpen(event.currentTarget);
    };

    const handleLogOut = () => {
      googleLogout();
      setOpen(null);
      socket.current.emit('removeUser',account);
      window.location.reload();
    }
    
    
  return (
    <>
        <MoreVertIcon 
            onClick={handleClick} 
            style={{
            cursor:'pointer',
            fontSize:'28.5px',
            filter:'invert(100%)'
            }}
        />
        <Menu
            anchorEl={open}
            keepMounted
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal:'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleLogOut}>Logout</MenuOption>
      </Menu>
    </>

  )
}
