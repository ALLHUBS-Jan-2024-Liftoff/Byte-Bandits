import { Password } from "@mui/icons-material";
import axios from "axios";
import { json } from "react-router-dom";

const YOUR_BEARER_TOKEN = localStorage.getItem('token');

const LOCAL_API_MEAL_URL = "http://localhost:8080/api/review";

export const fetchMealsForReview = async () => {
    try {
      const response = await axios.get(`${LOCAL_API_MEAL_URL}/`, {
        headers: { 
          'content-type': 'application/json',
          'Authorization': `Bearer ${YOUR_BEARER_TOKEN}`
        },
        withCredentials:true
      });
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the meals!", error);
      throw error;
    }
  };


  export const updateReview = async (mealId, rating, review ) => {
    try {
        const requestBody = { rating, review };
      // console.log("uri", uri, "label", label, "image", image, "source", source);
      await axios.put(`${LOCAL_API_MEAL_URL}/update`, requestBody, {
        headers: { 
          'content-type': 'application/json',
          'Authorization': `Bearer ${YOUR_BEARER_TOKEN}`
        },
        params: { mealId },
        withCredentials: true,
      });
      console.log("Review updated successfully!");
    } catch (error) {
      console.error("There was an error saving the meal!", error);
      throw error;
    }
  };

  export const updateUserPassword = async (currentPassword,newPassword ) => {
    try {
        const requestBody = { currentPassword, newPassword };
      // console.log("uri", uri, "label", label, "image", image, "source", source);
      await axios.put(`${LOCAL_API_MEAL_URL}/update-password`, requestBody, {
        headers: { 
            'content-type': 'application/json',
            'Authorization': `Bearer ${YOUR_BEARER_TOKEN}`
          },
        withCredentials: true,
      });
      console.log("User password updated successfully!");
    } catch (error) {
      console.error("There was an error saving", error);
      throw error;
    }
  };

  export const updateAll = async (currentPassword, newPassWord ) => {
    try {
        const requestBody = { currentPassword, newPassWord};
      // console.log("uri", uri, "label", label, "image", image, "source", source);
      await axios.put(`${LOCAL_API_MEAL_URL}/updateA`, requestBody, {
        headers: { 
          'content-type': 'application/json',
          'Authorization': `Bearer ${YOUR_BEARER_TOKEN}`
        },
        withCredentials: true,
      });
      console.log("Review updated successfully!");
    } catch (error) {
      console.error("There was an error saving the meal!", error);
      throw error;
    }
  };