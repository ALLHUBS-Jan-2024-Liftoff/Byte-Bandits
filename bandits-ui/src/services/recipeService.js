import axios from "axios";

const LOCAL_API_BASE_URL = "http://localhost:8080";

const RECIPE_SEARCH_BASE_URL = "https://api.edamam.com/api/recipes/v2?/type=public";

export const searchRecipes = async (queryString) => {
  try {
    const response = await axios.get(`${LOCAL_API_BASE_URL}&${queryString}`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the todos!", error);
    throw error;
  }
};

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${LOCAL_API_BASE_URL}/api/recipes`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the todos!", error);
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
    console.error("There was an error creating the todo!", error);
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
