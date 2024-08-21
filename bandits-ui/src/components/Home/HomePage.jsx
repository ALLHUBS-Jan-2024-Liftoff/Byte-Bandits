import React from 'react';
import ReviewMeal from './ReviewMeal';
import { Card } from '@mui/material';

export const HomePage = () => {

  return (
    <div className="mt-5 container">
      <div className="card">
        {/* <div className="card-header">Your Todo Application</div> */}
        <div className="card-body">
          Welcome to the Balanced Bytes!
        </div>
      </div>
    </div>
  );
}

export default HomePage;






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