import React, { useState, useEffect } from "react";
import { fetchRecipes, addRecipe, deleteRecipe } from "../../services/recipeService";
import { RecipeTable } from "./RecipeTable";
import { NewRecipeForm } from "./NewRecipeForm";
import axios from "axios";

const LOCAL_API_BASE_URL = "http://localhost:8080";

export const RecipePage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch all recipes when the component mounts
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(`${LOCAL_API_BASE_URL}/api/recipes`, {withCredentials:true});
        console.log("response", response.data);
        setRecipes(response.data);
      } catch (error) {
        console.error("There was an error fetching the recipes!", error);
        throw error;
      }
    };

    fetchSavedRecipes();
  }, []);

  // useEffect(() => {
  //   // Fetch all recipes when the component mounts
  //   fetchRecipes()
  //     .then(setRecipes)
  //     .catch((error) => {
  //       console.error("There was an error fetching the recipes!", error);
  //     });
  // }, []);

  // const handleAddRecipe = (uri, label, image, source) => {
  //   addRecipe(uri, label, image, source)
  //     .then((newRecipe) => {
  //       console.log("newRecipe", newRecipe);
  //       setRecipes([...recipes, newRecipe]);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error creating the recipe!", error);
  //     });
  // };

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
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Saved Recipes</div>
        <div className="card-body">
          <RecipeTable recipes={recipes} deleteRecipe={handleDeleteRecipe} />
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-primary"
          >
            {showAddForm ? "Close Form" : "New Recipe"}
          </button>
          {showAddForm && <NewRecipeForm addRecipe={handleAddRecipe} />}
        </div>
      </div>
    </div>
  );
};
