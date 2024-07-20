import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function CustomizedTables() {

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=turkey&app_key=c09e40e5a30cd7fd27e3a855f484a47b%20%09&app_id=9cf8e5c7&random=true';

const [hits, setHits] = React.useState(null);
const [error, setError] = React.useState(null);

// Retrieve data from public API
React.useEffect(() => {
// invalid url will trigger an 404 error
axios.get(`${baseURL}`).then((response) => {
    setHits(response.data.hits);
}).catch(error => {
    setError(error);
});
}, []);

if (error) return `Error: ${error.message}`;
if (!hits) return "No recipes found!"

  // Check the data returned from the API 
  console.log(hits);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [];

for (let i = 0; i < hits.length; i++) {
    let label = hits[i].recipe.label;
    let calories = parseFloat(hits[i].recipe.calories).toFixed(2);
    let fat = parseFloat(hits[i].recipe.totalNutrients.FAT.quantity).toFixed(2);;
    let carbs = parseFloat(hits[i].recipe.totalNutrients.CHOCDF.quantity).toFixed(2);;
    let protein = parseFloat(hits[i].recipe.totalNutrients.PROCNT.quantity).toFixed(2);;
    rows.push(createData(label, calories, fat, carbs, protein));
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Meal</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;