import React from "react";
import { addRecipe } from "../../services/recipeService";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ReactDayPicker from "../MealPlan/ReactDayPicker";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export const RecipeRowItem = ({ recipe, recipes, addRecipe, deleteRecipe }) => {
  const [date, setDate] = React.useState(null);




  return (
    <tr key={recipes.indexOf(recipe)}>
      <th scope="row">{recipes.indexOf(recipe) + 1}</th>
      <td>{recipe.label}</td>
      <td>{recipe.calories}</td>
      <td>{recipe.fat}</td>
      <td>{recipe.carbs}</td>
      <td>{recipe.protein}</td>
      <td>
        <div>
        <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
        {/* <Button variant="outlined" color="success" size="small" startIcon={<RestaurantIcon />} onClick={() => addRecipe(recipe.id)}>
          Add
        </Button> */}
        </div>
      </td>
      <td>
        <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => deleteRecipe(recipe.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
