import React, { useState } from 'react';
import { searchRecipes, addRecipe } from "../../services/recipeService";

import RecipeCardViewA from './RecipeCardViewA';
import RecipeTableA from './RecipeTableA';

export const SearchPage = () => {

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
        {showResults && <ResultsTable rows={rows} />}
        {/* {showResults && <CustomizedTables rows={rows} />} */}
      </div>
    </div>

  );
}