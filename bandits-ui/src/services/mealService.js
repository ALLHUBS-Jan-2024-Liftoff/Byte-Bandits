import axios from "axios";

const LOCAL_API_MEAL_URL = "http://localhost:8080/api/meals";

const RECIPE_SEARCH_BASE_URL = "https://api.edamam.com/api/recipes/v2?type=public";
const RECIPE_SEARCH_APP_KEY = "f7b7c5856e28029b8e7ab08182ab9fe1"
const RECIPE_SEARCH_APP_ID = "9cf8e5c7";

// TODO: Implement the searchMeals function
// export const searchRecipes = async (q) => {
//   try {
//     const response = await axios.get(`${RECIPE_SEARCH_BASE_URL}&app_key=${RECIPE_SEARCH_APP_KEY}&app_id=${RECIPE_SEARCH_APP_ID}&q=${q}`);
//     return response.data;
//   } catch (error) {
//     console.error("There was an error fetching the recipes!", error);
//     throw error;
//   }
// };

export const fetchMeals = async () => {
  try {
    const response = await axios.get(`${LOCAL_API_MEAL_URL}/saved`, {withCredentials:true});
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the meals!", error);
    throw error;
  }
};

// // Moved to calendarService, left here in case something breaks...
// export const fetchCalendarMeals = async () => {
//   try {
//     const response = await axios.get(`${LOCAL_API_MEAL_URL}/api/calendar`, {withCredentials:true});
//     console.log("response.data, from service", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("There was an error fetching the meals!", error);
//     throw error;
//   }
// };

export const addMeal = async (uri, label, mealType, date) => {
  try {
    // console.log("uri", uri, "label", label, "image", image, "source", source);
    await axios.post(`${LOCAL_API_MEAL_URL}/new`, null, {
      params: { uri, label, mealType, date },
      withCredentials: true,
    });
    console.log("Meal saved successfully!");
  } catch (error) {
    console.error("There was an error saving the meal!", error);
    throw error;
  }
};

// // Deprecated in favor of request params
// export const addMeal = async (meal) => {
//   try {
//     // console.log("uri", uri, "label", label, "image", image, "source", source);
//     const response = await axios.post(`${LOCAL_API_MEAL_URL}/api/meals/new`, meal,
//       {
//         headers: { 'content-type': 'application/json' },
//         withCredentials: true,
//       });
//       console.log("response.data", response.data);
//       return response.data;
//   } catch (error) {
//     console.error("There was an error saving the meal!", error);
//     throw error;
//   }
// };


export const deleteMeal = async (recipeId) => {
  try {
    await axios.post(`${LOCAL_API_MEAL_URL}/delete`, null, {
      params: { recipeId },
      withCredentials: true,
    });
  } catch (error) {
    console.error("There was an error deleting the meal!", error);
    throw error;
  }
};