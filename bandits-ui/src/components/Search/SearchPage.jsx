import React, { useState } from 'react';
import { searchRecipes, addRecipe } from "../../services/recipeService";

import RecipeCardViewA from './RecipeCardViewA';
import RecipeTableA from './RecipeTableA';

export const SearchPage = () => {

  return (
      <RecipeTableA/>
  );
}