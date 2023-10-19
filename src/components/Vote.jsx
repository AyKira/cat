import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image1 from "./catPic/image1.jpg";
import image2 from "./catPic/image2.jpg";
import image3 from "./catPic/image3.jpg";
import image4 from "./catPic/image4.jpg";

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

const pictures = [
  image1,
  image2,
  image3,
  image4,
];

function Vote() {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  function showNextPicture() {
    setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length);
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
