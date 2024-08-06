
import React, { useState } from 'react';
import { Card, CardContent, CardActions, Modal, IconButton, Typography, Box, CardMedia, Grid, List, ListItem, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';



// const CountMeals = (meals) => {
//   console.log(meals, "meals")
//   meals = (meals.length < 1) ? 'Nothing selected' : 'array'
//    return (
//       <Typography>{meals}</Typography>
//    );
// };


const ExpandableModalCard = ({ title, img, expandedContent, link, cal, mealId, handleMealPlan, mealType }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card>
      <CardContent>
        <Typography variant="h5" sx={{height:"4rem", fontSize:"1rem", fontWeight:"bold"}}>{title}</Typography>
        <CardMedia 
                          component="img"
                          width="100%"
                          image={img} 
                          alt={title}/>
        <Typography variant="h6" sx={{height:"1.5rem", fontSize:"1.3rem", fontWeight:"bold"}}>{cal.toFixed(2)} <span style={{fontSize: "0.8rem"}}>kcal</span></Typography>
      </CardContent>
        <CardActions>
          <Button
            onClick={handleOpen}
            aria-label="expand"
            variant="contained"
          >View Recipe
          </Button>
          <Button
            onClick={()=>handleMealPlan({mealId:title, mealType:mealType })}
            variant="contained"
          >Add to Basket
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: "50%",
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-title" variant="h6">
            {title}
          </Typography>

          <Box sx={{ display:"flex",flex:"row"}}>
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: '50%',
          }}/>

          <List id="modal-description" variant="body2" sx={{ mt: 2 }}>
              {expandedContent.map(x=>(
                <ListItem sx={{ display: 'flex', justifyContent: 'flex-start' }}>{x.text}</ListItem>
                  ))}
                  <ListItem><Link to={link} target="_blank" rel="noopener">Click here to view the full recipe</Link></ListItem>
            </List>
        </Box>
        </Box>
      </Modal>
    </>
  );
};

function RecipeCardView ({data}) {

  const [mealPlanBasket, setMealPlanBasket] = useState([]);

  const handleMealPlan = (recId) =>{
    (mealPlanBasket.length < 7) ? setMealPlanBasket((prev)=>[...prev,recId]) : console.log("you can select maximum of 7 meals") 
  }

  console.log(mealPlanBasket)
  return (
    <Box sx={{py:'3rem'}}>
      <Grid container spacing={2}>
        <Box sx={{width:'100%'}}>
            {mealPlanBasket.map(x=>(
              <Typography>{x['mealId']}</Typography>
            ))}
        </Box>
        {data.map((rec,idx)=>(
          <Grid item xs={12} sm={2.4}>
                <ExpandableModalCard
                  key={idx}
                  mealId={rec.recipe.uri}
                  mealType={rec.recipe.mealType}
                  title={rec.recipe.label}
                  img={rec.recipe.image}
                  link={rec.recipe.url}
                  cal={rec.recipe.totalDaily.ENERC_KCAL.quantity}
                  expandedContent={rec.recipe.ingredients}
                  handleMealPlan={handleMealPlan}
            />
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};

export default RecipeCardView;
