import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('beng');
  const [breedName, setBreedName] = useState('');
  const [breedImage, setBreedImage] = useState('');
  const [breedDescription, setBreedDescription] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      setBreeds(response.data);
    };
    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchBreedDetails = async () => {
      if (selectedBreed) {
        const imageResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`);
        setBreedImage(imageResponse.data[0]?.url || '');

        const breed = breeds.find(breed => breed.id === selectedBreed);
        setBreedDescription(breed?.description || '');

        const name = breeds.find(breed => breed.name === selectedBreed);
        setBreedName(breed?.name || '');
      }
    };

    fetchBreedDetails();
  }, [selectedBreed, breeds]);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '20px' }}>
      <Grid item xs={12} md={4}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel variant="standard" htmlFor="breeds-selector">
            Breeds
          </InputLabel>
          <NativeSelect
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            inputProps={{
              name: 'breed',
              id: 'breeds-selector',
            }}
          >
            {breeds.map(breed => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
        {selectedBreed && (
          <div>
            <img src={breedImage} alt={selectedBreed} style={{ width: '100%', marginTop: '20px' }} />
            <p>{breedName}</p>
            <p>{breedDescription}</p>
          </div>
        )}
      </Grid>
    </Grid>
  );
}

export default Breeds;
