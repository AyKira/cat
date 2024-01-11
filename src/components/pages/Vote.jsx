import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { randomPictureSlice, randomPictureSliceSelectors } from '../../redux-modules';

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
  const dispatch = useDispatch();

  const imageURL = useSelector((state) => randomPictureSliceSelectors.getRandomPictureData(state).imageUrl);
  const imageId = useSelector((state) => randomPictureSliceSelectors.getRandomPictureData(state).imageId);
  const isInvalid = useSelector((state) => randomPictureSliceSelectors.getRandomPictureIsInvalid(state));

  useEffect(() => {
    dispatch(randomPictureSlice.fetchRandomPicture());
  }, [dispatch]);

  useEffect(() => {
    if (isInvalid) {
      dispatch(randomPictureSlice.fetchRandomPicture());
    }
  }, [dispatch, isInvalid]);

  const handleLoveIt = () => {
    dispatch(randomPictureSlice.invalidateRandomPicture());
    dispatch(randomPictureSlice.votePicture({ imageId, value: 1 }));
  };

  const handleNopeIt = () => {
    dispatch(randomPictureSlice.invalidateRandomPicture());
    dispatch(randomPictureSlice.votePicture({ imageId, value: -1 }));
  };

  const handleSaveIt = () => {
    dispatch(randomPictureSlice.savePicture(imageURL));
    dispatch(randomPictureSlice.fetchRandomPicture());
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
          src={imageURL}
          alt="Random Cat"
          style={styles.picture}
        />
      </Grid>
    </Grid>
  );
}

export default Vote;