import React from 'react'
import {Dialog, Box, Typography, List, ListItem, styled } from "@mui/material"
import {GoogleLogin} from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from './context/AccountProvider';
import { addUser } from '../../service/api';


//CSS STYLING
const Component = styled(Box)`
display: flex;
justify-content: space-around;
align-items:center;
flex-direction:column;
`
const qr = 'https://tse1.mm.bing.net/th?id=OIP.NDKNbQ-I9ApLLVp-E6HSPwHaHa&pid=Api&P=0&h=180';

const Container = styled(Box)`
padding: 56px 0 56px 56px`


//styled is only for mui components
//to use it for basic html tags, use it like done below
const QRcode = styled('img')({
        height: 250,
        width: 250,
        margin:'50px 20px 0  50px'
    })
    
    const Title = styled(Typography)`
    font-size: 36px;
    color: #525252;
    font-weight: 100;
    font-family: inherit;
    margin-bottom: 25px;
    `
    const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        fonr-weight: 100;
        font-size: 25px;
        line-height: 28px;
        color: #4a4a4a;
    }
    `
    const dialogStyle = {
        height: '95%',
        paddingTop: '20px',
        marginTop: '12%',
        width: '70%',
        minwidth: '600px',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden'
    }



    //COMPONENT
export const LoginDialog = () => {

    const {setAccount,setPerson} = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwtDecode(res.credential);
        console.log(decoded);
        console.log(JSON.stringify(decoded));
            
        // localStorage.setItem('token',JSON.stringify(decoded));
        setAccount(decoded);
        setPerson(null);
        await addUser(decoded);
    }
     
    const onLoginError = (res) =>{
        console.log('login failed',res);
    }

  return (
    <Dialog
        open ={true}
        PaperProps={{sx: dialogStyle}}
        hideBackdrop={true}
    >
        <Component>
            <Container>
                <Title>To get started:</Title>
                <StyledList>
                    <ListItem><p className="loginFont">1. Press on the Google Sign In button below</p></ListItem>
                    <ListItem><p className="loginFont">2. Choose the account you want to sign it with</p></ListItem>
                    <ListItem><p className="loginFont">3. That's it Start Chatting!</p></ListItem>
                </StyledList>
            </Container>
            <Box style={{position: 'relative'}}>
            {/* <QRcode src={qr} alt='qr code'/> */}
                <GoogleLogin
                    onSuccess = {onLoginSuccess}
                    onError = {onLoginError}
                />
            <Box style = {{position: 'absolute' ,top: '50%', transform: 'translateX(25%)', width: '230px' }}>
            </Box>
            </Box>
        </Component>
        </Dialog>
  )
}
