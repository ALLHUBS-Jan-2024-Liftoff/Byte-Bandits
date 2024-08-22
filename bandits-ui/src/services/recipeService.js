import axios from "axios";

const YOUR_BEARER_TOKEN = localStorage.getItem('token');

const LOCAL_API_RECIPE_URL = "http://localhost:8080/api/recipes";

const RECIPE_SEARCH_BASE_URL = "https://api.edamam.com/api/recipes/v2?type=public";
const RECIPE_SEARCH_BY_URI_BASE_URL = "https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=";

const RECIPE_SEARCH_APP_KEY = "f7b7c5856e28029b8e7ab08182ab9fe1"
const RECIPE_SEARCH_APP_ID = "9cf8e5c7";

export const searchRecipes = async (q) => {
  try {
    const response = await axios.get(`${RECIPE_SEARCH_BASE_URL}&app_key=${RECIPE_SEARCH_APP_KEY}&app_id=${RECIPE_SEARCH_APP_ID}&q=${q}`); 
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the recipes!", error);
    throw error;
  }
};

export const fetchRecipes = async () => {
  try {
    console.log("FETCHING RECIPES WITH TOKEN:", YOUR_BEARER_TOKEN);
    const response = await axios.get(`${LOCAL_API_RECIPE_URL}`, {
      headers: {
      'Authorization': `Bearer ${YOUR_BEARER_TOKEN}`
      },
      withCredentials: true
    });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the recipes!", error);
    throw error;
  }
};

export const addRecipe = async (recipe) => {
  try {
    // // Reveal the contents of the recipe object
    // console.log("recipe", recipe);
    const response = await axios.post(`${LOCAL_API_RECIPE_URL}/new`, recipe,
      {
      headers: { 
        'content-type': 'application/json',
        'Authorization': `Bearer ${YOUR_BEARER_TOKEN}`
      },
      withCredentials: true,
      });
      console.log("response.data", response.data);
      return response.data;
  } catch (error) {
    console.error("There was an error saving the recipe!", error);
    throw error;
  }
};

export const deleteRecipe = async (recipeId) => {
  try {
    await axios.post(`${LOCAL_API_RECIPE_URL}/delete`, null, {
      params: { recipeId },
      headers: { 
        'content-type': 'application/json',
        'Authorization': `Bearer ${YOUR_BEARER_TOKEN}`
      },
      withCredentials: true,
    });
    console.log("Recipe deleted!");
  } catch (error) {
    console.error("There was an error deleting the recipe!", error);
    console.log("Token attached to request:", YOUR_BEARER_TOKEN);
    throw error;
  }
};

// Requests a group of recipes by chaining their URIs into a single query string
export const findRecipeByUri = async (queryString) => {
  try {
    const response = await axios.get(
      `${RECIPE_SEARCH_BY_URI_BASE_URL}&app_key=${RECIPE_SEARCH_APP_KEY}&app_id=${RECIPE_SEARCH_APP_ID}${queryString}`); 
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the recipes!", error);
    throw error;
  }
};
