import React, { useState, useEffect } from "react";
import { deleteRecipe, fetchRecipes } from "../../services/recipeService";
import { RecipeTable } from "./RecipeTable";
import { NewRecipeForm } from "./NewRecipeForm";
import { fetchUserData } from "../../services/userService";
import axios from "axios";

export const RecipePage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    // Fetch all recipes when the component mounts
    fetchRecipes()
      .then(setRecipes)
      .catch((error) => {
        console.error("There was an error fetching the recipes!", error);
      });
  }, []);

  // console.log(recipes,"recipes");

  const handleDeleteRecipe = (recipeId) => {
    deleteRecipe(recipeId)
      .then(() => {
        setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
      })
      .catch((error) => {
        console.error("There was an error deleting the recipe!", error);
      });
  };

  return (
    <div className="mt-5 px-0 container">
      <div className="card">
        <div className="card-header">Your Recipes</div>
        <div className="card-body">
          <RecipeTable
          recipes={recipes}
          deleteRecipe={handleDeleteRecipe}
          setRecipes={setRecipes}
          />
        </div>
      </div>
    </div>
  );
};

