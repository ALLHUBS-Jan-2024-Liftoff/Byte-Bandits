import React, {useEffect} from 'react';
import RecipeReviewCard from './MealCard';
import foundRecipes from './foundRecipes';
import { fetchMeals } from '../../services/mealService';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { fetchRecipes } from '../../services/recipeService';
import { useState } from 'react';

const recipes = foundRecipes[0].hits;

console.log(recipes);



const MealCardPage = () => {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    // Fetch all recipes when the component mounts
    fetchRecipes()
      .then(setRecipes)
      .catch((error) => {
        console.error("There was an error fetching the recipes!", error);
      });
  }, []);
  
  // className="container mt-20 d-flex flex-wrap gap-3" id="testCard"
  return (

    <Container sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 3,
      mt: 5,
    }}>
      {recipes.map((recipe, index) => (
        <RecipeReviewCard key={index} recipe={recipe} sx={{
          overflow: 'visible',
        }} />
      ))}
    </Container>

  )
}

export default MealCardPage;