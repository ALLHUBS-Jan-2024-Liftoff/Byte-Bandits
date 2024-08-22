import React from "react";
import { RecipeRowItem } from "./RecipeRowItem";

export const RecipeTable = ({ recipes, deleteRecipe }) => {
  return (
    <table className="table table-hover container-fluid">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Label</th>
          <th scope="col">Calories</th>
          <th scope="col">Fat</th>
          <th scope="col">Cards</th>
          <th scope="col">Protein</th>
          <th scope="col">Meal Type</th>
          <th scope="col">Select Date</th>
          <th scope="col">Add to Meal</th>
          <th scope="col">Delete from Collection</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe) => (
          <RecipeRowItem key={recipes.indexOf(recipe)} recipe={recipe} recipes={recipes} deleteRecipe={deleteRecipe} />
        ))}
      </tbody>
    </table>
  );
};

{/* <td>{recipe.label}</td>
<td>{recipe.calories}</td>
<td>{recipe.fat}</td>
<td>{recipe.carbs}</td>
<td>{recipe.protein}</td> */}