import React, { useState } from "react";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';

export const NewRecipeForm = ({ addRecipe }) => {
  const [uri, setUri] = useState("");
  const [label, setLabel] = useState("");
  const [image, setImage] = useState("");
  const [source, setSource] = useState("");

  useEffect(() => {
    // Fetch all recipes when the component mounts
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(`${LOCAL_API_BASE_URL}/api/recipes`, {withCredentials:true});
        console.log("response", response.data);
        setRecipes(response.data);
        console.log("Meals fetched from the database", response.data);
      } catch (error) {
        console.error("There was an error fetching the recipes!", error);
        throw error;
      }
    }
  }, []);


  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            URI
            <input
              type="text"
              className="form-control"
              value={uri}
              onChange={(e) => setUri(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Label
            <input
              type="text"
              className="form-control"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              required
            />
          </label>
          <div className="mb-3">
          <label className="form-label">
            Image
            <input
              type="text"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Source
            <input
              type="text"
              className="form-control"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            />
          </label>
        </div>
        </div>
        <Button type="submit" variant="contained" color="success" size="large" startIcon={<RestaurantIcon />}>
          Add Recipe
        </Button>
      </form>
    </div>
  );
};
