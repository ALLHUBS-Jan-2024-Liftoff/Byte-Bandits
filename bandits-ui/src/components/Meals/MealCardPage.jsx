import React, {useEffect} from 'react';
import RecipeReviewCard from './MealCard';
import foundRecipes from '../../data/foundRecipes';
import { fetchMeals } from '../../services/mealService';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const recipes = foundRecipes[0].hits;

console.log(recipes);



const MealCardPage = () => {
  const [meals, setMeals] = React.useState([]);


  useEffect(() => {
    // Fetch all recipes when the component mounts
    fetchMeals()
      .then(setMeals)
      .catch((error) => {
        console.error("There was an error fetching the meals", error);
      });
  }, []);

  return (

    <div className="container mt-20 d-flex flex-wrap gap-3" id="testCard">
      {recipes.map((recipe, index) => (
        <RecipeReviewCard key={index} recipe={recipe} sx={{
          overflow: 'visible',
        }} />
      ))}
    </div>

  )
}

export default MealCardPage;