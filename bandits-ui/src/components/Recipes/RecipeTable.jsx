import React from "react";
import { RecipeRowItem } from "./RecipeRowItem";
import { addRecipe } from "../../services/recipeService";

export const RecipeTable = ({ recipes, deleteRecipe, addRecipe }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Label</th>
          <th scope="col">Calories</th>
          <th scope="col">Fat</th>
          <th scope="col">Carbs</th>
          <th scope="col">Protein</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe) => (
          <RecipeRowItem key={recipes.indexOf(recipe)} recipe={recipe} recipes={recipes} deleteRecipe={deleteRecipe} addRecipe={addRecipe} />
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