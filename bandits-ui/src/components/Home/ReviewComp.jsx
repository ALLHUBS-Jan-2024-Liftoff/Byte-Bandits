import { Box, Button, FormGroup, Rating, TextField, Typography } from '@mui/material';
import React from 'react'
import { Container } from 'react-bootstrap';

function ReviewComp() {
    
    const [rating, setRating] = React.useState(0);
    const [review, setReview] = React.useState('');

    const handlesetReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = (event) =>{
        
        event.preventDefault();
        console.log("user clicked on button",rating+"   " + review)
    }



  return (
    <Box component='form' onSubmit={handleSubmit} sx={{flex:'row', width:'100%', textAlign:'left'}}>
        <FormGroup sx={{flex:'row'}}>
        <Typography component="h4" fontSize='1.2rem'>Rating</Typography>
        <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
            setRating(newValue);
            }}
            sx={{py:"1rem"}}
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
              value={review}
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