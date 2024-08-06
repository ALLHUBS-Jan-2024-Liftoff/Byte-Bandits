import axios from "axios";

const LOCAL_API_BASE_URL = "http://localhost:8080";

const RECIPE_SEARCH_BASE_URL = "https://api.edamam.com/api/recipes/v2?type=public";
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
    const response = await axios.get(`${LOCAL_API_BASE_URL}/api/recipes`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the recipes!", error);
    throw error;
  }
};

export const addRecipe = async (uri, label, image, source) => {
  try {
    const response = await axios.post(`${LOCAL_API_BASE_URL}/api/recipes/new`,
      {
        uri: uri,
        label: label,
        image: image,
        source: source
      },
    {
      headers: { 'content-type': 'application/json' },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
  } catch (error) {
    console.error("There was an error creating the recipe!", error);
    throw error;
  }
};

// export const addRecipe = async (uri, label, image, source) => {
//   try {
//     const response = await axios.post(`${LOCAL_API_BASE_URL}/api/recipes/new`, null, {
//       params: { uri, label, image, source },
//     });
//     console.log("response.data", response.data);
//     return (response);
//   } catch (error) {
//     console.error("There was an error creating the todo!", error);
//     throw error;
//   }
// };

export const deleteRecipe = async (recipeId) => {
  try {
    await axios.post(`${LOCAL_API_BASE_URL}/api/recipes/delete`, null, {
      params: { recipeId },
    });
  } catch (error) {
    console.error("There was an error deleting the recipe!", error);
    throw error;
  }
};
