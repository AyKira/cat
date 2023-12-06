// Breeds.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography'; // Import Typography from Material-UI
import { selectBreeds, setSelectedBreed, fetchBreeds, fetchBreedDetails } from '../../redux-modules/breedSlice';

function Breeds() {
  const dispatch = useDispatch();
  const { breeds, selectedBreed, breedName, breedImage, breedDescription } = useSelector(selectBreeds);

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBreedDetails(selectedBreed));
  }, [dispatch, selectedBreed]);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '20px' }}>
      <Grid item xs={12} md={4}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel variant="standard" htmlFor="breeds-selector">
            Breeds
          </InputLabel>
          <NativeSelect
            value={selectedBreed}
            onChange={(e) => dispatch(setSelectedBreed(e.target.value))}
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
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <img src={breedImage} alt={selectedBreed} style={{ width: '100%', marginTop: '20px' }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">{breedName}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{breedDescription}</Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Breeds;
