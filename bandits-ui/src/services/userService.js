// services/userService.js
/*
Call registerUser(email, firstName, lastName, password) to register a user.
Call loginUser(username, password) to log in a user and store their JWT token.

*/
import axios from "axios";
import { logout } from "./AuthService";
import { getCurrentUser } from "./AuthService";


const BASE_API_URL = "http://localhost:8080/api/user";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

// Interceptor to add JWT token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      console.log("Token attached to request:", token);
    } else {
      console.warn("No token found in localStorage");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle unauthorized responses
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 403) {
        console.error("403 Forbidden: Access Denied", error.response);
        // Possible redirect or error handling
      } else if (error.response.status === 401) {
        console.error("401 Unauthorized: Authentication Required", error.response);
      }
    }
    return Promise.reject(error);
  }
);

// Fetch user data
export const fetchUserData = async () => {
  try {
      console.log("Fetching user data...");
      const token = localStorage.getItem('token');
      if (!token) {
          console.warn("No token found in localStorage");
          throw new Error("No token found");
      }
      const response = await axiosInstance.get('/');
      console.log("User data fetched:", response.data);
      return response.data;
  } catch (error) {
      console.error("Error fetching user data", error);
      throw error;
  }
};

export const registerUser = async (email, firstName, lastName, password) => {
  try {
    console.log("Registering user...");
    const response = await axiosInstance.post('/register', {
      email,
      firstName,
      lastName,
      password,
    });
    console.log("User registered:", response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error creating the user!", error);
    throw error;
  }
};

// Update user details
export const updateUserDetails = async (userData) => {
  try {
    console.log("Updating user details...");
    const response = await axiosInstance.put('/', userData);
    console.log("User details updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error updating the user details!", error);
    throw error;
  }
};

// Update user password
export const updateUserPassword = async (currentPassword, newPassword) => {
  try {
    console.log("Updating user password...");
    const response = await axiosInstance.put('/password', {
      currentPassword,
      newPassword,
    });
    console.log("User password updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error updating the user password!", error);
    throw error;
  }
};

export const handleLogout = async () => {
  try {
    // Use the logout function from AuthService
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthenticated(false);

    console.log("Token: ", localStorage.getItem("token"));
    console.log("User: ", localStorage.getItem("user"));
    // Redirect to login page
    navigate("/login");
  } catch (error) {
    console.error("Logout failed", error);
  }
};