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
import foundRecipes from '../../data/foundRecipes';
import AnchorTemporaryDrawer from './MealDrawer';
import AccordionUsage from './Accordian';
import NutriChart from "../Analysis/NutriChart";
import { pl } from 'date-fns/locale';

{/* <Typography variant="body2" color="text.secondary" sx={{
  py: 0,
  mb: -3,
  textAlign: 'left',
}}>

  {ingredients.map((ingredient) => (
    <p>{ingredient}</p>
  ))}

</Typography> */}


const newRecipe = foundRecipes[0].hits[2].recipe;
console.log(newRecipe.images.THUMBNAIL.url)

const ingredients = newRecipe.ingredientLines;

console.log(ingredients);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={newRecipe.label}
        subheader={`${parseFloat((newRecipe.calories.toFixed(2)))} Calories`}
      />
      <CardMedia
        component="img"
        height="194"
        image={newRecipe.images.SMALL.url}
        alt="Paella dish"
      />
      <CardContent>
        <AccordionUsage />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}


