

import React from 'react';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";

const styles = {
  container: {
    marginTop: '20px',
  },
  picture: {
    display: 'block',
    margin: '0 5px',
  },
};

function Favorites() {
  const savedUrls = useSelector((state) => state.randomPicture.savedUrls);

  return (
    <Grid container spacing={2} justifyContent="center" style={styles.container}>
      {savedUrls.map((imageUrl, index) => (
        <Grid item key={index}>
          <img
            src={imageUrl}
            alt={`Favorite ${index + 1}`}
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Favorites;
