import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import axios from 'axios';

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
  const [imageURL, setImageURL] = useState('');

  const fetchRandomCatImage = async () => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search?limit=1&size=full&sub_id=demo-93913c'
      );
      if (response.data.length > 0) {
        // Extract the image URL from the response
        const imageUrl = response.data[0].url;
        setImageURL(imageUrl);
      }
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  useEffect(() => {
    fetchRandomCatImage(); // Fetch a random cat image when the component mounts
  }, []);

  const handleLoveIt = () => {
    fetchRandomCatImage(); // Fetch a new random cat image when "Love it!" is clicked
    // Handle the "Love it!" action (e.g., dispatch an action)
  };

  const handleNopeIt = () => {
    fetchRandomCatImage(); // Fetch a new random cat image when "Nope it!" is clicked
    // Handle the "Nope it!" action (e.g., dispatch an action)
  };

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
