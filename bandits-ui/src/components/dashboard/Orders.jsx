import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Jun, 2024',
    'Teriyaki Chicken',
    '11',
    '40 min',
    8.7,
  ),
  createData(
    1,
    '19 Jun, 2024',
    'Buffalo Cauliflower',
    '7',
    '35 min',
    7.4,
  ),
    createData(2,
    '03 Jul, 2024',
    'Fried Tofu',
    '4',
    '30 min',
    8.3,
  ),
  createData(
    3,
    '15 Jul, 2024',
    'Pasta Salad',
    '11',
    '40 min',
    8.7,
  ),
  createData(
    4,
    '16 Jul, 2024',
    'Banana Bread',
    '5',
    '110 min',
    9.1,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Recipes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Recipe</TableCell>
            <TableCell>Ingredients</TableCell>
            <TableCell>Cook Time</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more recipes
      </Link>
    </React.Fragment>
  );
}
