import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import catLogo from './images/catLogo.png';
import catLogoMirror from './images/catLogoMirror.png';
import catMiddle from './images/catMiddle.png';

function myAppBar({toggleDrawer}) {
  return (
    <Box sx={{ width: '60%' }}>
      <AppBar position="static"  onClick={toggleDrawer(true)}  style={{ backgroundColor: 'black' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={catLogo}  style={{ width: '240px' }} />
          <img src={catMiddle} style={{ width: '180px' }} />
          <img src={catLogoMirror} style={{ width: '240px' }} />
        
        </Toolbar>
      </AppBar>
      <h1></h1>
    </Box>
  );
}

export default myAppBar;
