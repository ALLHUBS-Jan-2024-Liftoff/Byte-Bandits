import React, { useState, useEffect } from "react";
import { fetchRecipes, addRecipe, deleteRecipe } from "../../services/recipeService";
import { ResultsTable } from "./ResultsTable";

export const ResultsPage = () => {

  // useEffect(() => {
  //   // Fetch all recipes when the component mounts
  //   searchRecipes(queryString)
  //     .then(setRecipes)
  //     .catch((error) => {
  //       console.error("There was an error fetching the recipes!", error);
  //     });
  // }, []);

  const handleAddRecipe = (uri, label, image, source) => {
    addRecipe(uri, label, image, source)
      // .then((newRecipe) => {
      //   setRecipes([...recipes, newRecipe]);
      // })
      // .catch((error) => {
      //   console.error("There was an error saving the recipe!", error);
      // });
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Search Results</div>
        <div className="card-body">
          <ResultsTable recipes={recipes} addRecipe={handleAddRecipe} />
        </div>
      </div>
    </div>
  );
};
