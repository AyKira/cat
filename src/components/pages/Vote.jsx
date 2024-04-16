import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { fetchRandomPicture, savePicture, votePicture } from '../../redux-modules/randomPictureSlice';
import { getRandomPictureData } from '../../redux-modules/randomPictureSliceSelectors';


const styles = {
  buttons1: {
    backgroundColor: 'green',
    color: 'white',
    margin: '0 5px',
  },
  buttons2: {
    backgroundColor: 'red',
    color: 'white',
    margin: '0 5px',
  },
  buttons3: {
    margin: '0 5px',
  },
  picture: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
  },
};

function Vote() {

  //useSelector
  const { imageUrl, imageId } = useSelector(getRandomPictureData);

  //const
  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    if (imageUrl.length === 0) {
      dispatch(fetchRandomPicture());
    }
  }, [dispatch]);

  //functions
  function handleLoveIt() {
    dispatch(votePicture({ imageId, value: 1 }));
    dispatch(fetchRandomPicture());
  };

  function handleNopeIt() {
    dispatch(votePicture({ imageId, value: -1 }));
    dispatch(fetchRandomPicture());
  };

  function handleSaveIt() {
    dispatch(savePicture());
    dispatch(fetchRandomPicture());
  }

  return (
    <Grid container spacing={2} columns={2} justifyContent="center" style={{ marginTop: '20px' }}>
      <Grid item xs={2} style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          style={styles.buttons1}
          onClick={handleLoveIt}
        >
          Love it!
        </Button>
        <Button
          variant="contained"
          style={styles.buttons2}
          onClick={handleNopeIt}
        >
          Nope it!
        </Button>
        <Button
          variant="contained"
          style={styles.buttons3}
          onClick={handleSaveIt}
        >
          Save it!
        </Button>
      </Grid>
      <Grid item xs={2}>
        <img
          src={imageUrl}
          alt="Random Cat"
          style={styles.picture}
        />
      </Grid>
    </Grid>
  );
}

export default Vote;