import { Box, Button, FormGroup, Link, Rating, TextField, Typography } from '@mui/material';
import {updateReview} from '../../services/ReviewService'
import React from 'react'
import { Container } from 'react-bootstrap';

function ReviewComp({recipe,date,mealType,id,review,rating}) {
    
    const [uRating, setRating] = React.useState(rating);
    const [uReview, setReview] = React.useState(review);

    const handlesetReviewChange = ({mealType}) => {
        setReview(event.target.value);
    };
    const handleSubmit = (event) =>{

        event.preventDefault();
        updateReview(id,uRating,uReview)
        console.log("user clicked on button",rating+"   " + review)
    }

  return (
    <Box component='form' onSubmit={handleSubmit} sx={{flex:'row', width:'100%', textAlign:'left'}}>
        <FormGroup sx={{flex:'row'}}>
        <Typography textAlign="left">Date: {date}</Typography>
        <Typography textAlign="left">Date: {rating}</Typography>
        <Typography textAlign="left" py={1}>Meal Type: {mealType}</Typography>
        <Rating
            name="simple-controlled"
            value={uRating}
            onChange={(event, newValue) => {
            setRating(newValue);
            }}
            sx={{py:"0.5"}}
        />
        </FormGroup>
        <TextField
              required
              multiline
              rows={3}
              fullWidth
              id="review"
              label="review"
              name="review"
              autoComplete="review"
              value={uReview}
              onChange={handlesetReviewChange}
              autoFocus
            />
        <Box sx={{ mt: 2, display:'flex'}}>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
      </Box>
    </Box>
  )
}

export default ReviewComp