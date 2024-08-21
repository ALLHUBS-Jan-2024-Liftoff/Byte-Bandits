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


function RecipeStandardViewA({data}) {

  console.log(data)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
            <Box sx={{py:'3rem'}}>

            </Box>
    </>
  )
}

export default RecipeStandardViewA