import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { fetchRandomPicture } from '../../redux-modules/randomPictureSlice';

const styles = {
  buttons1: {
    backgroundColor: 'green',
    color: 'white',
  },
  buttons2: {
    backgroundColor: 'red',
    color: 'white',
  },
  picture: {
    display: 'block',
    margin: '0 auto',
  },
};

function Vote() {
  const dispatch = useDispatch();
  const imageURL = useSelector((state) => state.randomPicture.data);


  useEffect(() => {
    dispatch(fetchRandomPicture());
  }, [dispatch]);

  const handleLoveIt = () => {
    dispatch(fetchRandomPicture());
  };

  const handleNopeIt = () => {
    dispatch(fetchRandomPicture());
  }

  return (
    <Grid container spacing={2} columns={2} justifyContent="center" style={{ marginTop: '20px' }}>
      <Grid item xs={1} style={{ textAlign: 'end' }}>
        <Button
          variant="contained"
          style={styles.buttons1}
          onClick={handleLoveIt}
        >
          Love it!
        </Button>
      </Grid>
      <Grid item xs={1} style={{ textAlign: 'start' }}>
        <Button
          variant="contained"
          style={styles.buttons2}
          onClick={handleNopeIt}
        >
          Nope it!
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