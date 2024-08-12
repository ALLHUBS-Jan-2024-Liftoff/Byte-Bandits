import React from "react";
import { addRecipe } from "../../services/recipeService";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';
export const RecipeRowItem = ({ recipe, recipes, addRecipe, deleteRecipe }) => {
  return (
    <tr key={recipes.indexOf(recipe)}>
      <th scope="row">{recipes.indexOf(recipe) + 1}</th>
      <td>{recipe.label}</td>
      <td>{recipe.calories}</td>
      <td>{recipe.fat}</td>
      <td>{recipe.carbs}</td>
      <td>{recipe.protein}</td>
      <td>
        <Button variant="outlined" color="success" size="small" startIcon={<RestaurantIcon />} onClick={() => addRecipe(recipe.id)}>
          Add
        </Button>
      </td>
      <td>
        <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => deleteRecipe(recipe.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
