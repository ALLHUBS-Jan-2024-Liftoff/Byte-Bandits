import React from "react";
import { RecipeRowItem } from "./RecipeRowItem";

export const RecipeTable = ({ recipes, deleteRecipe }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">URI</th>
          <th scope="col">Label</th>
          <th scope="col">Image</th>
          <th scope="col">Source</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe) => (
          <RecipeRowItem key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
        ))}
      </tbody>
    </table>
  );
};
