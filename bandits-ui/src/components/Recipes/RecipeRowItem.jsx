import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { addMeal } from '../../services/mealService.js';
import MuiDatePicker from '../Calendar/MuiDatePicker';
import Select from 'react-select';

export const RecipeRowItem = ({ recipe, recipes, deleteRecipe, removeRecipe }) => {
  const [date, setDate] = React.useState("");
  const [mealType, setMealType] = React.useState("");

  const handleAddMeal = (uri, label, mealType, date) => {
    console.log("uri", uri, "label", label, "mealType", mealType, "date", date);
    addMeal(uri, label, mealType, date);
    removeRecipe(recipe.id);
    alert("Meal saved successfully!"); 
      // .then((newRecipe) => {
      //   setRecipes([...recipes, newRecipe]);
      // })
      // .catch((error) => {
      //   console.error("There was an error saving the recipe!", error);
      // });
  };


return (
  <tr key={recipes.indexOf(recipe)}>
    <th scope="row">{recipes.indexOf(recipe) + 1}</th>
    <td>{recipe.label}</td>
    <td>{recipe.calories}</td>
    <td>{recipe.fat}</td>
    <td>{recipe.carbs}</td>
    <td>{recipe.protein}</td>
    <td>
  <select
    className="btn btn-outline-info"
    aria-label="Default select example"
    onChange={(e) => setMealType(e.target.value)}
    required
  >
    <option value="DEFAULT">Meal Type</option>
    <option value="breakfast">Breakfast</option>
    <option value="lunch">Lunch</option>
    <option value="dinner">Dinner</option>
  </select>
</td>
<td>
  <input
    className="form-control container-sm"
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    required
  />
</td>
<td>
  <Button
    variant="outlined"
    color="success"
    size="medium"
    startIcon={<RestaurantIcon />}
    onClick={() => {
      handleAddMeal(recipe.uri, recipe.label, mealType, date);
      setMealType("");
      setDate("");
    }}
    disabled={mealType === "DEFAULT" || !date}
    title={mealType === "DEFAULT" || !date ? "Please select a meal type and date" : ""}
  >
    Add
  </Button>
</td>
<td>
  <Button
    variant="outlined"
    color="error"
    size="medium"
    startIcon={<DeleteIcon />}
    onClick={() => deleteRecipe(recipe.id)}
  >
    Delete
  </Button>
</td>
  </tr>
);
};
