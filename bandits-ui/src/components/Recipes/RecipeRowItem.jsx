import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { addMeal } from '../../services/mealService.js';
import { InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export const RecipeRowItem = ({ recipe, recipes, deleteRecipe, removeRecipe }) => {
  const [date, setDate] = React.useState(dayjs());
  const [mealType, setMealType] = React.useState("");

  const handleAddMeal = (uri, label, mealType, date) => {
    console.log("uri", uri, "label", label, "mealType", mealType, "date", date);
    addMeal(uri, label, mealType, date);
    removeRecipe(recipe.id);
    alert("Meal saved successfully!");

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
        <FormControl sx={{
          minWidth: 120,
          maxWidth: 300,
          m: 0,
        }}>
          <InputLabel id="meal-type">Meal Type</InputLabel>
          <Select
            aria-label="Default select example"
            onChange={(e) => setMealType(e.target.value)}
            size="medium"
            value={mealType}
            label="Meal Type"
            required
          >
            <MenuItem value="">Select:</MenuItem>
            <MenuItem value={"breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"lunch"}>Lunch</MenuItem>
            <MenuItem value={"dinner"}>Dinner</MenuItem>
          </Select>
        </FormControl>
      </td>
      <td>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormControl sx={{
            minWidth: 135,
            maxWidth: 350,
            m: 0,
          }}>
            <DatePicker
            defaultValue={dayjs()}
            value={date}
            onChange={(newValue) => setDate(newValue)}
            />
          </FormControl>
        </LocalizationProvider>
      </td>
      <td>
        <Button
          variant="outlined"
          color="success"
          size="large"
          startIcon={<RestaurantIcon />}
          onClick={() => {
            handleAddMeal(recipe.uri, recipe.label, mealType, date);
            setMealType("");
            setDate("");
          }}
          disabled={mealType === "" || !date}
          title={mealType === "" || !date ? "Please select a meal type and date" : ""}
          sx={{
            marginTop: "auto",
            padding: 1.75,
          }}

        >
          Add
        </Button>
      </td>
      <td>
        <Button
          variant="outlined"
          color="error"
          size="large"
          startIcon={<DeleteIcon />}
          onClick={() => deleteRecipe(recipe.id)}
          sx={{
            marginTop: "auto",
            padding: 1.75,
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
