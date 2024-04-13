

import React from 'react';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

const styles = {
  picture: { width: '150px', height: '150px', objectFit: 'cover' },
  text: { textAlign: 'center', margin: '20px 20px' },
};

function Favorites() {
  const savedUrls = useSelector((state) => state.randomPicture.savedUrls);

  return (
    <>
      <Typography variant="h3" style={styles.text}>Your liked pictures: </Typography>
      <Grid container spacing={2} justifyContent="center" >
        {savedUrls.map((imageUrl, index) => (
          <Grid item key={index}>
            <img src={imageUrl} style={styles.picture} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Favorites;
