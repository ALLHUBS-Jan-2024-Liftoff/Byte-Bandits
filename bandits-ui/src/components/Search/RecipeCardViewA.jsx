
import React, { useState } from 'react';
import { Card, CardContent, CardActions, Modal, IconButton, Typography, Box, CardMedia, Grid, List, ListItem, Button, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { addRecipe } from "../../services/recipeService";

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
            onClick={() => addRecipe(handleMealPlan)}
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
          width: "60%",
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
              p:'2rem',
              height:'max-content',
          }}/>

          <List id="modal-description" variant="body2" sx={{ mt: 1 }}>
            <ListItem><Typography variant="body1" color='#666666' fontSize='1.3rem'>Ingredients</Typography></ListItem>
              {expandedContent.map(x=>(
                <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', py:'0.3rem'}}>{x.text}</ListItem>
                  ))}
                  <ListItem><Link  href={link} target="_blank" rel="noopener" >Click here to view the full recipe</Link></ListItem>
            </List>
        </Box>
        </Box>
      </Modal>
    </>
  );
};


function RecipeCardViewA ({recipes}) {


  function createData(label, calories, fat, carbs, protein, uri, image, source) {
    return { label, calories, fat, carbs, protein, uri, image, source };
  }
  
  const rows = [];
  
  for (let i = 0; i < recipes.length; i++) {
      let label = recipes[i].recipe.label;
      let calories = parseFloat((recipes[i].recipe.calories).toFixed(2));
      let fat = parseFloat((recipes[i].recipe.totalNutrients.FAT.quantity).toFixed(2));
      let carbs = parseFloat((recipes[i].recipe.totalNutrients.CHOCDF.quantity).toFixed(2));
      let protein = parseFloat((recipes[i].recipe.totalNutrients.PROCNT.quantity).toFixed(2));
      let uri = recipes[i].recipe.uri;
      let image = recipes[i].recipe.image;
      let source = recipes[i].recipe.source;
      rows.push(createData(label, calories, fat, carbs, protein, uri, image, source));

  }

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
        {recipes.map((rec,idx)=>(
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
                  handleMealPlan={rows[idx]}
            />
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};

export default RecipeCardViewA;
