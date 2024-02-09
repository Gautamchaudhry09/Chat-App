import { Box, Dialog, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Menu } from './menu/Menu'
import { EmptyChat } from './chat/EmptyChat'
import { ChatBox } from './chat/ChatBox'
import { useContext } from 'react'
import { AccountContext } from '../account/context/AccountProvider'
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const dialogStyle = {
        // height: '95%',
        width: '100%',
        margin: '0px',
        // minwidth: '600px',
        maxWidth: '3500px',
        maxHeight: '100%',
        overflow: 'hidden'
    }

    const Component = styled(Box)`
    // display:flex;
    `

    const LeftComponent = styled(Box)`
    // min-width: 320px;
    // width: 38%;
    overflow:hidden;
    `

    const RightComponent = styled(Box)`
    // width: 75%;
    min-width: 300px;
    overflow:hidden;
    height:100%;
    border-left: 1px solid black;
    `

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    //   marginLeft: 0,
    padding:0
    }),
  }),
);

 const StyledDrawer = styled(Drawer)`
    min-width: 300px;
    // position:relative;
    `


const drawerWidth=390;
export const ChatDialog = () => {

    const {person} = useContext(AccountContext);
    const [openChatsDrawer, setOpenChatsDrawer] = useState(true);
    const[loadingConvo,setLoadingConvo] = useState(false);

  return (
    <Dialog
        open={true}
        PaperProps={{sx: dialogStyle}}
        hideBackdrop={true}
        maxWidth={'md'}
    >
        <Component>
            {/* <LeftComponent> */}
                <StyledDrawer
                    className='ConversationMenu'
                    sx={{
                    flexShrink: 0,
                    width:drawerWidth,
                    '& .MuiDrawer-paper': {
                        overflow:'hidden',
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="persistent"
                    // anchor="left"
                    open={openChatsDrawer}
                >
    
                    <Menu open={openChatsDrawer} setOpen={setOpenChatsDrawer} loading={loadingConvo}  setLoading={setLoadingConvo}/>
                </StyledDrawer>
            {/* </LeftComponent> */}
            {/* <RightComponent> */}
            <Main open={openChatsDrawer}>

                {Object.keys(person).length ? (
                    <ChatBox open={openChatsDrawer} setOpen={setOpenChatsDrawer} loadingConvo={loadingConvo} setLoadingConvo={setLoadingConvo}/>
                    ) : ( 
                        <EmptyChat/>
                        )}
                        </Main>
            {/* </RightComponent> */}
        </Component>

    </Dialog>
  )
}
