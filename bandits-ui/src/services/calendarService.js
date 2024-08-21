import axios from "axios";

const LOCAL_CALENDAR_API_URL = "http://localhost:8080/api/calendar";

export const fetchCalendarMeals = async () => {
  try {
    const response = await axios.get(`${LOCAL_CALENDAR_API_URL}`, {withCredentials:true});
    console.log("response.data, from service", response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the meals!", error);
    throw error;
  }
};
