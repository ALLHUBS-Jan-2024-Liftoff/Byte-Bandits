import React from "react";
import { ResultsRowItem } from "./ResultsRowItem";
import { addRecipe } from "../../services/recipeService";

export const ResultsTable = ({ rows }) => {
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
        {rows.map((row,idx) => (
          <ResultsRowItem rows={idx} recipe={row} />
        ))}
      </tbody>
    </table>
  );
};
