import React, { useState } from 'react';
import { searchRecipes, addRecipe, deleteRecipe } from "../../services/recipeService";
import { ResultsPage } from './ResultsPage';
import CustomizedTables from './RecipeResultsTable';

export const SearchPage = () => {

  const [showResults, setShowResults] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  // function formatUri(e) {
  //   const formData = new FormData(e.target);
  //   const q = new URLSearchParams(formData).toString();
  //   console.log(q);
  //   return q;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    searchRecipes(query)
      .then((response) => {
        // console.log("response", response.hits);
        setRecipes(response.hits);
      }).catch((error) => {
        console.error("There was an error fetching the recipes!", error);
    });
    setShowResults(true);
    // console.log("recipes:", recipes);
  }

  function createData(label, calories, fat, carbs, protein, uri) {
    return { label, calories, fat, carbs, protein, uri };
  }
  
  const rows = [];
  
  for (let i = 0; i < recipes.length; i++) {
      let label = recipes[i].recipe.label;
      let calories = parseFloat(recipes[i].recipe.calories).toFixed(2);
      let fat = parseFloat(recipes[i].recipe.totalNutrients.FAT.quantity).toFixed(2);
      let carbs = parseFloat(recipes[i].recipe.totalNutrients.CHOCDF.quantity).toFixed(2);
      let protein = parseFloat(recipes[i].recipe.totalNutrients.PROCNT.quantity).toFixed(2);
      let uri = recipes[i].recipe.uri;
      console.log(recipes[i].recipe);
      rows.push(createData(label, calories, fat, carbs, protein, uri));
      console.log("rows", i, rows[i]);
      // return rows;
  }

  return (
    <div className="container-lg">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Enter an Ingredient to Search for Recipes</label>
          <input
              type="text"
              className="form-control"
              name="q"
              onChange={e => setQuery(e.target.value)}
              required
            />
          {/* <small id="emailHelp" class="form-text text-muted">Enter an ingrediet to search for recipes</small> */}
        </div>
        {/* <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <div className="card-body">
        {showResults && <CustomizedTables rows={rows} />}
      </div>
    </div>

  );
}