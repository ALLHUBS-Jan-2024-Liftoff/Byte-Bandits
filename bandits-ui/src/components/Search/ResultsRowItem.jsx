import React from "react";
import { addRecipe } from "../../services/recipeService";

export const ResultsRowItem = ({ recipe, addRecipe }) => {
  return (
    <tr key={recipe.id}>
      <th scope="row">{recipe.id}</th>
      <td>{recipe.uri}</td>
      <td>{recipe.label}</td>
      <td>{recipe.image}</td>
      <td>{recipe.source}</td>
      <td>
        <button className="btn btn-success" onClick={() => addRecipe(recipe.id)}>
          Save
        </button>
      </td>
    </tr>
  );
};
