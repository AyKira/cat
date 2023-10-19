import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { incrementPictureIndex } from '../../voteSlice';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image1.jpg";
export const pictures = [image1, image2, image3, image4];

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
  const currentPictureIndex = useSelector((state) => state.vote.currentPictureIndex);
  const dispatch = useDispatch();

  function showNextPicture() {
    dispatch(incrementPictureIndex());
  }

  return (
    <Grid container spacing={2} columns={2} justifyContent="center" style={{ marginTop: '20px' }}>
      <Grid item xs={1} style={{ textAlign: 'end' }}>
        <Button
          variant="contained"
          style={styles.buttons1}
          onClick={showNextPicture}
        >
          Love it!
        </Button>
      </Grid>
      <Grid item xs={1} style={{ textAlign: 'start' }}>
        <Button
          variant="contained"
          style={styles.buttons2}
          onClick={showNextPicture}
        >
          Nope it!
        </Button>
      </Grid>
      <Grid item xs={2}>
        <img
          src={pictures[currentPictureIndex]}
          alt="Current Picture"
          style={styles.picture}
        />
      </Grid>
    </Grid>
  );
}

export default Vote;
