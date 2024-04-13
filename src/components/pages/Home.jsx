import React from 'react';
import Typography from '@mui/material/Typography';

function Home() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
  };
  const h1Style = {
    marginBottom: '100px',
  };

  return (
    <div style={style}>
      <Typography variant="h3" style={h1Style}>
        Welcome to the world of CATOOOO!!!
      </Typography>
      <Typography variant="h6">
        Click on cat face to continue
      </Typography>
    </div>
  );
}

export default Home;
