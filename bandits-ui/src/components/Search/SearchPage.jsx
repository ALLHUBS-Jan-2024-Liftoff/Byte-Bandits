import React, { useState } from 'react';
import { searchRecipes, addRecipe, deleteRecipe } from "../../services/recipeService";
import { ResultsPage } from './ResultsPage';

export const SearchPage = () => {

  const [showResults, setShowResults] = useState(false);
  const [recipes, setRecipes] = useState([]);

  function formatUri(e) {
    const formData = new FormData(e.target);
    const queryString = new URLSearchParams(formData).toString();
    console.log(queryString);
    return queryString;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryString = formatUri(e);
    searchRecipes(queryString)
      .then((response) => {
      setRecipes(response.data.hits);
  }).catch((error) => {
        console.error("There was an error fetching the recipes!", error);
    });
    setShowResults(true);
  }

  return (
    <div className="container-lg">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Enter an Ingredient to Search for Recipes</label>
          <input
              type="text"
              className="form-control"
              name="q"
              // onChange={(e) => setQ(e.target.value)}
              required
            />
          {/* <small id="emailHelp" class="form-text text-muted">Enter an ingrediet to search for recipes</small> */}
        </div>
        {/* <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <div className="card-body">
        {showResults && <ResultsPage recipes={recipes} />}
      </div>
    </div>

  );
}






// import { Box, Button, Container, Typography } from '@mui/material';
// import Header from '../Header';

// export const HomePage = () => {

//   return (
//     <div className='App'>
//             <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '50vh',
//           backgroundColor: '#f5f5f5',
//           backgroundImage:`url('src/img/bg-img-hero.jpeg') `,
//           backgroundSize:'cover',
//           textAlign: 'center',
//           color:'#333',
//           padding: 4,
//           my:2
//         }}
//       >
//         <Container sx={{bgcolor:'rgba(175, 161, 168, 0.50)', p:5}}>
//           <Header />
//           <Typography variant="h1" gutterBottom>
//           Healthy Eating Made Easy
//           </Typography>
//           <Typography variant="h2" paragraph>
//           Customizable Meal Plans for Every Lifestyle
//           </Typography>
//           <Button variant="contained" sx={{backgroundColor:'green'}} size="large">
//             Get Started.
//           </Button>
//         </Container>
//       </Box>
//     </div>
//   )
// }