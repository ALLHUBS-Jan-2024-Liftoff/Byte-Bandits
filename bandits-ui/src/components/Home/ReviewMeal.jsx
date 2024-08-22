import React, { useEffect } from 'react'
import { fetchMealsForReview } from "../../services/ReviewService";
import RecipeStandardViewA from '../Search/RecipeStandardViewA';
import { Box, Container, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import { left } from '@popperjs/core';
import ReviewComp from './ReviewComp';



function ReviewMeal() {
    const [meals, setMeals] = React.useState([]);
    useEffect(() => {
      // Fetch all recipes when the component mounts
      fetchMealsForReview()
        .then(setMeals)
        .catch((error) => {
          console.error("There was an error fetching the recipes!", error);
        });
    }, []);

    console.log(meals)
    return (
        <>
        {(meals.length == 0) ? (
            <Typography py={5}>No Recipes are avalilable in the meal plan for review.</Typography> 
        ) :
        (
            <>
        <Typography variant='h3' sx={{p:'2rem'}}>Review Recipes</Typography>
        <Container sx={{alignContent:"left", my:4}}>
                    {meals.map(x=>(
                        <>
                        <Typography variant='h5' textAlign="left" py={1}>Recipe: {x.recipe.label}</Typography>
                        <Container sx={{p:'2rem', display:'flex'}}>
                            <Box
                            component="img"
                            src={x.recipe.image}
                            alt={x.recipe.label}
                            sx={{
                                height:'max-content',
                                px:'1rem'
                            }}/>
                            
                            <ReviewComp {...x}/>
                        </Container>
                        </>
                    ))}
        </Container>
        </>
        )}
        </>
    );
}

export default ReviewMeal