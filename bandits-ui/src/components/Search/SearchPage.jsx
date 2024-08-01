export const SearchPage = () => {

  return (
    <div className="container-lg">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Enter an Ingredient to Search for Recipes</label>
          <input type="text" class="form-control" id="q" aria-describedby="recipeHelp" placeholder="Enter ingredient" />
          {/* <small id="emailHelp" class="form-text text-muted">Enter an ingrediet to search for recipes</small> */}
        </div>
        {/* <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
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