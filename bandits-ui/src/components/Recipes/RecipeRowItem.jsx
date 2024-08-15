import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MuiDatePicker from '../MealPlan/MuiDatePicker';
import Select from 'react-select';

export const RecipeRowItem = ({ recipe, recipes, deleteRecipe, addMeal }) => {
  const [date, setDate] = React.useState("");
  const [mealType, setMealType] = React.useState("");

  // const MealPicker = (e) => {

  //   const options = [
  //     { value: 'breakfast', label: 'Breakfast' },
  //     { value: 'lunch', label: 'Lunch' },
  //     { value: 'dinner', label: 'Dinner' }
  //   ];

  //   return (
  //     <Select options={options} value={mealType} onChange={(e) => console.log(e.target.value)} />
  //   );


return (
  <tr key={recipes.indexOf(recipe)}>
    <th scope="row">{recipes.indexOf(recipe) + 1}</th>
    <td>{recipe.label}</td>
    <td>{recipe.calories}</td>
    <td>{recipe.fat}</td>
    <td>{recipe.carbs}</td>
    <td>{recipe.protein}</td>
    <td>
    <select className="btn btn-outline-info" aria-label="Default select example" onChange={(e) => setMealType(e.target.value)}>
  <option value="DEFAULT">Meal Type</option>
  <option value="breakfast">Breakfast</option>
  <option value="lunch">Lunch</option>
  <option value="dinner">Dinner</option>
</select>
    </td>
    <td>
      <input className="form-control container-sm" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    </td>
    <td>
      <Button variant="outlined" color="success" size="medium" startIcon={<RestaurantIcon />} onClick={() => addMeal(recipe.uri, mealType, date)}>
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
