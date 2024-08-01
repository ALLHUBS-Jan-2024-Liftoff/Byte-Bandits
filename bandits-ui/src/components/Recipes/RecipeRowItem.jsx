import React from "react";

export const RecipeRowItem = ({ recipe, deleteRecipe }) => {
  return (
    <tr key={recipe.id}>
      <th scope="row">{recipe.id}</th>
      <td>{recipe.uri}</td>
      <td>{recipe.label}</td>
      <td>{recipe.image}</td>
      <td>{recipe.source}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
