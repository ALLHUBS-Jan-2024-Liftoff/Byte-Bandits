import { Box, Card, CardContent, CardHeader, CardMedia, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


function RecipeStandardView({data}) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
            <Box sx={{py:'3rem'}}>
              <Grid container spacing={2}>
              {data.map(rec=>(
                  <Grid item xs={12} sm={3}>

                    <Card>
                      <CardHeader 
                          title={rec.recipe.label} />
                      <CardMedia 
                          component="img"
                          width="90%"
                          image={rec.recipe.image} 
                          alt={rec.recipe.label}/>
                      <CardContent>
                          <List>
                            {rec.recipe.ingredients.map(x=>(
                              <ListItem>{x.text}</ListItem>
                            ))}
                        </List>
                      </CardContent>
                    </Card>
                    {/* <ListItemText>{rec.recipe.label}</ListItemText> */}
                    {/* <img src={rec.recipe.image}></img>
                    <Typography>Ingredients</Typography>
                    <List>
                        {rec.recipe.ingredients.map(x=>(
                              <ListItem>{x.text}</ListItem>
                      ))}
                    </List> */}


                    
                  </Grid>
              ))}
              </Grid>
            </Box>
    </>
  )
}

export default RecipeStandardView