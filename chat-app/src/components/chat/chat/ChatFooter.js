import styled from '@emotion/styled'
import { Box, InputBase, Menu } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { uploadFile } from '../../../service/api';
import EmojiPicker from 'emoji-picker-react'
import SendIcon from '@mui/icons-material/Send';

const Component = styled(Box)`
    min-height:66px;
    background: #ededed;
    display:flex;
    width:100%;
    align-items:center;
    padding:0 15px;
    & > *{
        margin:5px;
        color:#919191;
    }
`

const Search = styled(Box)`
background-color:#FFFFFF;
border-radius:18px;
width: calc(94% - 100px);
`
const InputField = styled(InputBase)`
width:100%;
height:20px;
padding:20px;
padding-left:25px;
font-size:16px;
`


export const ChatFooter = ({sendText,enterSendText,setValue,value,file,setFile}) => {


  const [emojiOpen, setEmojiOpen] = useState(false);
  const [open, setOpen] = useState(null);
  
  useEffect(()=>{
    const getImage = async() => {
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        await uploadFile(data);
      }
    }
  },[file])
  
  const handleClose = () => {
      setOpen(null);
  }

  const handleClick = (event) => {
    setOpen(event.currentTarget);
    };

  const onFileChange = (e) => {
    console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }

  return (
    <Component className='chatFooter'>
      <EmojiEmotionsOutlinedIcon onClick={handleClick} />
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
          <EmojiPicker onEmojiClick={(data)=>{setValue(v => {
            // console.log(data.emoji);
            // console.log(v);
             return (v+data.emoji);
            })}} />
          
        </Menu>

        <label htmlFor='fileInput'>
          <AttachFileOutlinedIcon style={{cursor:'pointer'}}/>
        </label>
        <input 
          type='file'
          id='fileInput'
          style={{display:'none'}}
          onChange={(e) => onFileChange(e)}
          />
        <Search className='chatInput'>
            <InputField 
            placeholder='Type a Message'
            onChange={(e)=>setValue(e.target.value)}
            onKeyPress={(e)=>enterSendText(e)}
            value={value}
            style={{
              color:'white',
            }}
            />
        </Search>
        <SendIcon style={{fontSize:'29px'}} onClick={sendText}/>
    </Component>
  )
}
