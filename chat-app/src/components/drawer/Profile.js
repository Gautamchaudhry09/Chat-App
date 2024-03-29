import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../account/context/AccountProvider'
import styled from '@emotion/styled'

const Image = styled('img')({
        height: 180,
        width: 180,
        borderRadius:'50%',
        padding: '25px 0'
    })

const ImageContainer = styled(Box)`
display:flex;
justify-content:center;
`
const BoxWrapper = styled(Box)`
background: #FFFFFF;
padding: 12px 30px 2px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
& :first-child{
    font-size: 13px;
    color: #009686;
    font-weight:200;
}
& :last-child{
    margin: 14px;
    color: #4A4A4A;
}
`

const DescriptionContainer = styled(Box)`
padding: 15px 20px 28px 30px;
& > p{
    font-size: 13px;
    color: #8696a0
}
`

export const Profile = () => {
    const {account} = useContext(AccountContext);
  return (
    <>
        <ImageContainer>
            <Image src = {account.picture} alt='dp'/>
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <DescriptionContainer>
            <Typography>This is not your username. This name will be displayed to other contacts</Typography>
        </DescriptionContainer>
        <BoxWrapper>
            <Typography>About</Typography>
            <Typography>Eat! Sleep~ Code` Repeat!</Typography>
        </BoxWrapper>
        
    </>
  )
}
