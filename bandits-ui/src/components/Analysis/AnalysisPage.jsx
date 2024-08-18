import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../../services/recipeService";
import NutriChart from "./NutriChart";

export const AnalysisPage = () => {
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   // Fetch all recipes when the component mounts
  //   fetchRecipes()
  //     .then(setRecipes)
  //     .catch((error) => {
  //       console.error("There was an error fetching the recipes!", error);
  //     });
  // }, []);

  return (
    <div className="mt-5 px-0 container-fluid">
      <div className="card">
        <div className="card-header">Nutritional Analysis</div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <NutriChart recipes={recipes} />
        </div>
      </div>
    </div>
  );
};