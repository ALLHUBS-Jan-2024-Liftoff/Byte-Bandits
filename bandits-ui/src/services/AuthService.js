import axios from "axios";

const LOCAL_API_USER_URL = "http://localhost:8080/user"; 

// Axios instance with interceptors
const axiosInstance = axios.create({
  baseURL: LOCAL_API_USER_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // Handle unauthorized access
      logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
export const register = async (username, password, firstName, lastName, email) => {
  try {
    const response = await axios.post(`${LOCAL_API_USER_URL}/register`, {
      username,
      password,
      firstName,
      lastName,
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Login function
export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post('/login', {
      username,
      password,
    });

    console.log("Login Response:", response.data);

    const { token, message } = response.data;

    // Store token and user information in localStorage
    localStorage.setItem("token", token);

    return { token, message };
  } catch (error) {
    console.error("Login failed", error);
    if (error.response && error.response.status === 401) {
      throw new Error("Invalid username or password.");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
};
// Logout function to clear user session
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Get the current user from localStorage
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

//  user is authenticated by verifying the presence of the token
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

//  function to get protected data using the axios instance
export const getProtectedData = async () => {
  try {
    const response = await axiosInstance.get('/protected/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching protected data', error);
    throw error;
  }
};

export default axiosInstance;