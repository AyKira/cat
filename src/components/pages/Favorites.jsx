

import React from 'react';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { getRandomPictureData } from '../../redux-modules/randomPictureSliceSelectors';

function Favorites() {

  //selectors

  const savedUrls = useSelector(getRandomPictureData).savedUrls;



  //styles
  const styles = {
    picture: { width: '150px', height: '150px', objectFit: 'cover' },
    text: { textAlign: 'center', margin: '20px 20px' },
  };
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
