import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'

function RecipeGroupByCusine({data}) {



  return (
    <>
    {
        Object.entries(data).sort().map(([key, cusines]) => (
            
            <Box sx={{py:'3rem'}}>
                <Typography id={key} sx={{textTransform:'Capitalize'}} variant='h4'>{key}</Typography>  
              <Grid container spacing={2}>
              {cusines.map(rec=>(
                  <Grid item xs={12} sm={3}>
                    {/* <ListItemText>{rec.recipe.label}</ListItemText> */}
                    <img src={rec.recipe.image}></img>
                    <Typography>Ingredients</Typography>
                    <List>
                        {rec.recipe.ingredients.map(x=>(
                              <ListItem>{x.text}</ListItem>
                      ))}
                    </List>
                  </Grid>
              ))}
              </Grid>
            </Box>
          ))
    }
    </>
  )
}

export default RecipeGroupByCusine