import React from "react";
import { ResultsRowItem } from "./ResultsRowItem";
import { addRecipe } from "../../services/recipeService";

export const ResultsTable = ({ recipes, addRecipe }) => {
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
          <ResultsRowItem key={recipe.id} recipe={recipe} addRecipe={addRecipe} />
        ))}
      </tbody>
    </table>
  );
};
