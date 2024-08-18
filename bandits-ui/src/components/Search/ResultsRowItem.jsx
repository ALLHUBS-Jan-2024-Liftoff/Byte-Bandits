import React from "react";
import { addRecipe } from "../../services/recipeService";
import Button from "@mui/material/Button";
import RestaurantIcon from '@mui/icons-material/Restaurant';

export const ResultsRowItem = ({ rows, recipe }) => {
  return (
    <tr key={rows.indexOf(recipe)}>
      <th scope="row">{rows.indexOf(recipe) + 1}</th>
      <td>{recipe.label}</td>
      <td>{recipe.calories}</td>
      <td>{recipe.fat}</td>
      <td>{recipe.carbs}</td>
      <td>{recipe.protein}</td>
      <td>
        <Button variant="outlined" color="success" size="small" startIcon={<RestaurantIcon />} onClick={() => addRecipe(recipe)}>
          Save
        </Button>
      </td>
    </tr>
  );
};

// {
//   "label": "Duck Fries",
//   "calories": "994.73",
//   "fat": "39.09",
//   "carbs": "149.10",
//   "protein": "17.47",
//   "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_287fdaad5579477af3279b72066c84d6",
//   "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c2a/c2a9ab99d58c256f2a42534f2132c8a1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD33JmGUc%2BT%2FLrTmjKg9C0vr7%2BG54kv1XdHSMMeVCIA%2BQIgAX8i%2B%2FyOAnwjrc6e5RFsAwlF7wMV39kepbXyYvjlg9EqwgUIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDIj80QSfvKuoeWB8SiqWBfVkUkoChR0JZ97PihWK6QQ7y5PLgwsAU1ajGvEwlBRpurvih5KO4x59XzMi9V%2FA4az6FI9NftLmAIJdNq7GfhjlPD2W4NhSxzQRt8tBADwy%2F6nWjKw7RcJW51NlxSzCGqhfwWe1Z0waMcakcMi9EXCCJzNIu6P7xZraVM7HCvA%2BAzX2rjzRyMcrJtTeEI6jejgoG6vYDALFTeZ%2B36SYI0JcCb08q%2B0RWrS0Q00LKoxlLn9IgMnnX12%2FFjDwTWnyyIhpqZ49zE0rWz2U4bW1DBF8myV%2BgN4AwrxaWdqEL1SZd1ePK5%2B8LHYMhNVgEB7Jq2wYU2KNf1hULlYN7RCVzESEvdWNLJgQ1a1NRnnRv7ifVVbdjIaENjH7XrdXsKslYM%2FRjdI30HErQ1ZHhh6whdIVnTiycnzapRVx7eWfkafp3LwBdfTKzf6SQvpiBDU8sVtqI%2FIUPcYEWmGBhgUOcZiA1xa6TfMfHYevhIVYQBWtMYil6tYpvs%2Bzi902z2oYJnoS1Ebp2Po6gbbq97pukojNxC6Mb37RI6kKelqrrfhtX9TcvN%2F1CkJ%2B7R%2Fz4bbtFn8C%2FCUf43yOhu5zwkARA4RHE%2F%2BqIsDsxh60TW%2FKlGePGeuoFnyHiU%2Fls59cjnNDT2bNYmjByPbgrpXYZXyE1vNQPXnFdMiYDJkxg66lpJGhKcEwymiR7pclykOFA%2B0lzDq0D8Pq7VMmWhuHlsgQkJagGIgNoVtLomS5pEOivqNBmjWvVtfjHCFjWBxSl3w%2B1Uy56Zz2EgiLRhgh7KsDOEzvzmzRP076eiY0TUPyH3gqE3bPISjOnhRAKJT0elsqYxzUpHIBG8hsfMAAyuJanYPOKLhhge%2B2yL7hT5NeAc6Qt1TthHEKMPX76LUGOrEB2YLMoeIcUWNs7WombNQ3QG2KH%2FbWfd7hoHTtJ%2BW%2Fd%2BX%2FSrF2fFCc%2FED%2FIvuhuUvFbTae1hF%2BGSAPEwV1TNXSj0jWiNu%2B0%2B4kRmEPzIPBVVvhWAA81EP%2BrnnzNiN0NPprBcTnq0C8n%2FRyIPsdfHzK2uTzM%2Fa2%2B8gMiQLuaDqmoDi3PBmPBFiHuZ%2B%2FUvN1OTz8gpaLdxJMYXFR5kF5bKCFIfqwlpaQ4NHfTEqz9yUZht%2Bz&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240812T182518Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRAEE27T%2F20240812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=61f70c32975213dfcfa8da6f8c8f8df8010f94a4a28acbf7eb41e7a097018263",
//   "source": "Food52"
// }