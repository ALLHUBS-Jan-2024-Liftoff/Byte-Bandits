import React from "react";
import { addRecipe } from "../../services/recipeService";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MuiDatePicker from '../MealPlan/MuiDatePicker';
import Select from 'react-select';

export const RecipeRowItem = ({ recipe, recipes, addRecipe, deleteRecipe }) => {
  const [date, setDate] = React.useState("");
  const [mealType, setMealType] = React.useState("");

  const MealPicker = () => {

    const options = [
      { value: 'breakfast', label: 'Breakfast' },
      { value: 'lunch', label: 'Lunch' },
      { value: 'dinner', label: 'Dinner' }
    ];

    return (
      <Select options={options} onChange={(e) => setMealType(e.target.value)} />
    );

  }


  return (
    <tr key={recipes.indexOf(recipe)}>
      <th scope="row">{recipes.indexOf(recipe) + 1}</th>
      <td>{recipe.label}</td>
      <td>{recipe.calories}</td>
      <td>{recipe.fat}</td>
      <td>{recipe.carbs}</td>
      <td>{recipe.protein}</td>
      <td>
        <MealPicker className = "form-select" />
      </td>
      <div>
      <td>
        <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </td>
      </div>
      <td>
        <Button variant="outlined" color="success" size="medium" startIcon={<RestaurantIcon />} onClick={() => addRecipe(recipe.id)}>
          Add
        </Button>
      </td>
      <td>
        <Button variant="outlined" color="error" size="medium" startIcon={<DeleteIcon />} onClick={() => deleteRecipe(recipe.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
