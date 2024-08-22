import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import foundRecipes from './foundRecipes';
import AnchorTemporaryDrawer from './MealDrawer';
import AccordionUsage from './Accordian';
import NutriChart from "../Analysis/NutriChart";
import { pl } from 'date-fns/locale';
import { Grid } from '@mui/material';
import { DatePicker } from '@mui/lab';

// {/* <Typography variant="body2" color="text.secondary" sx={{
//   py: 0,
//   mb: -3,
//   textAlign: 'left',
// }}>

//   {ingredients.map((ingredient) => (
//     <p>{ingredient}</p>
//   ))}

// </Typography> */}


// const newRecipe = foundRecipes[0].hits[2].recipe;
// console.log(newRecipe.images.THUMBNAIL.url)

// const ingredients = newRecipe.ingredientLines;

// console.log(ingredients);

export default function RecipeReviewCard(recipe) {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState('');

  // const currentRecipe = recipe;
  // console.log(currentRecipe.recipe.label);

  const { label, image, protein, calories, carbs, fat, source } = recipe.recipe;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="m-30">
    <Card sx={{
      backgroundColor: 'rgba(221, 219, 221, 0.7)',
      maxWidth: 345,
      minWidth: 300,
      overflow: 'visible',
      }}>
      <CardHeader
        title={<Typography variant="h6" component="div">{label}</Typography>} // Modified line
        subheader={`from ${source}`}
      />
      <CardMedia
        backgroundColor="rgba(0, 0, 0, 0.08)"
        component="img"
        height="194"
        image={image}
        alt={label}
      />
      <CardContent>
          <Grid container spacing={2} paddingRight={4}>
            <Grid item xs={6}>
              <Typography variant="h6" color="text.secondary">
                Carbs: {carbs}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" color="text.secondary">
                Protein: {protein}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" color="text.secondary">
                Fat: {fat}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" color="text.secondary">
                Calories: {calories}
              </Typography>
            </Grid>
          </Grid>
      </CardContent>
      <CardContent>

        </CardContent>
    </Card>
    </div>
  );
}