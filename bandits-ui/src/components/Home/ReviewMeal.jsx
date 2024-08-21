import React, { useEffect } from 'react'
import { fetchRecipes } from "../../services/recipeService";
import RecipeStandardViewA from '../Search/RecipeStandardViewA';
import { Box, Container, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import { left } from '@popperjs/core';
import ReviewComp from './ReviewComp';



function ReviewMeal() {
    const [meals, setMeals] = React.useState([]);

    useEffect(() => {
      // Fetch all recipes when the component mounts
      fetchRecipes()
        .then(setMeals)
        .catch((error) => {
          console.error("There was an error fetching the recipes!", error);
        });
    }, []);

    return (
        <>
        <Typography variant='h3' sx={{p:'2rem'}}>Revew Recipes</Typography>
        <Container sx={{alignContent:"left", my:4}}>
                    {meals.map(x=>(
                        <>
                        <Typography textAlign="left">{x.label}</Typography>
                        <Container sx={{p:'2rem', display:'flex'}}>
                            <Box
                            component="img"
                            src={x.image}
                            alt={x.label}
                            sx={{
                                height:'max-content',
                                px:'1rem'
                            }}/>
                            <ReviewComp/>
                        </Container>
                        </>
                    ))}
        </Container>
        </>
    );
}

export default ReviewMeal