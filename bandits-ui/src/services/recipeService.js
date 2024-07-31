import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}/api/recipes`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the todos!", error);
    throw error;
  }
};

export const addRecipe = async (uri, label, image, source) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/api/recipes/new`,
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
//     const response = await axios.post(`${BASEAPIURL}/api/recipes/new`, null, {
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
    await axios.post(`${BASEAPIURL}/api/recipes/delete`, null, {
      params: { recipeId },
    });
  } catch (error) {
    console.error("There was an error deleting the recipe!", error);
    throw error;
  }
};
