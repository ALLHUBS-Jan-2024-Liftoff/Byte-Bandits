import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/user/login`, null, {
      params: { username, password },
    });

    console.log("Login Response:", response.data); // Log the entire response object

    const { token, user, userRole } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", userRole);
    return user;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// export const getCurrentUser = () => {
//   const user = localStorage.getItem("user");
//   if (user) {
//     try {
//       return JSON.parse(user);
//     } catch (e) {
//       console.error("Failed to parse user from localStorage", e);
//       return null;
//     }
//   }
//   return null;
// };

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
