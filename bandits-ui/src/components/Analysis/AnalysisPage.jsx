import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../../services/recipeService";
import NutriChart from "./NutriChart";
import Title from "@mui/material/Typography";
import Card from "@mui/material/Card";

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
    <React.Fragment>
      <Card>
      <div style={{ width: '100%', flexGrow: 20, overflow: 'visible' }}>
        <NutriChart recipes={recipes} />
      </div>
      </Card>
    </React.Fragment>
  );
};

