import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';
import { inputBreed, fetchDetails } from '../../redux-modules/breedSlice';
import { getBreedData } from '../../redux-modules/breedSliceSelector';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function Breeds() {

  //const
  const dispatch = useDispatch();

  //selector
  // const breeds = useSelector(store) => store.breeds.breeds;
  const { breeds, breedDescription, breedImages, breedName, selectedBreed } = useSelector(getBreedData);


  //useEffect
  useEffect(() => {

    dispatch(fetchDetails());

  }, [selectedBreed]);



  //style
  const style = {
    width: 'auto',
    height: '300px'
  };


  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '20px' }}>
      <Grid item xs={12} md={4}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel variant="standard" htmlFor="breeds-selector">
            Breeds
          </InputLabel>
          <NativeSelect
            value={selectedBreed}
            onChange={(e) => dispatch(inputBreed(e.target.value))}
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
              <Carousel showThumbs={false}>
                {breedImages.map((imageUrl, index) => (
                  <div key={index}>
                    <img src={imageUrl} style={style} alt={`Breed ${selectedBreed} Image ${index}`} />
                  </div>
                ))}
              </Carousel>
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
