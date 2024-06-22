import React, { useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../account/context/AccountProvider'
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import ChatIcon from '@mui/icons-material/Chat';
import { HeaderMenu } from './HeaderMenu';
import { InfoDrawer } from '../../drawer/InfoDrawer';
import ArrowBack from '@mui/icons-material/ArrowBack';

    const Component = styled(Box)`
    height: 45px;
    // background:#2f7f8f;
    background:url('https://tse1.mm.bing.net/th?id=OIP.tmv5TiO9QdEhOGMdc-OhsgHaEK&pid=Api&P=0&h=180');
    padding: 8px 16px;
    display: flex;
    box-shadow:
    align-items:center;
    `

    const Wrapper = styled(Box)`
    margin-left: auto;
    & > *{
        margin-left:2px;
        padding: 8px;
    };
    & :first-child{
        font-size: 22px;
        margin-right:8px;
        margin-top: 3px;
    }
    `

    const Image = styled('img')({
        height: 50,
        width: 50,
        borderRadius:'50%'
    })

export const Header = ({open,setOpen}) => {
    const {account,person} = useContext(AccountContext);
    const [openDrawer, setOpenDrawer] = useState(false);
    
  return (
    <>
    <Component className='menuHeader'>
        <Image src={account.picture} alt='dp' onClick={()=>setOpenDrawer(true)} style={{cursor: 'pointer'}}></Image>
        <Wrapper>
        <ChatIcon 
            style={{
                // cursor:'pointer',
                fontSize:'25px',
                filter:'invert(100%)'
            }}
            />
        <HeaderMenu setOpenDrawer={setOpenDrawer} />
        {
            person.name && open ? (
                <ArrowBack onClick={()=>setOpen(false)} style={{cursor: 'pointer', marginLeft:'10px', filter:'invert(100%)'}}/>
            ):(
                <></>
            )
        }
        </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
            </>
  )
}
