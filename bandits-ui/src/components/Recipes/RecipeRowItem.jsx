import React from "react";
import { addRecipe } from "../../services/recipeService";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';
export const RecipeRowItem = ({ recipe, addRecipe, deleteRecipe }) => {
  return (
    <tr key={recipe.id}>
      <th scope="row">{recipe.id}</th>
      <td>{recipe.uri}</td>
      <td>{recipe.label}</td>
      <td>{recipe.image}</td>
      <td>{recipe.source}</td>
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
