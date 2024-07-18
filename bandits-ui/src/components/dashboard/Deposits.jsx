import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Weekly Calories:</Title>
      <Typography component="p" variant="h4">
        13,024
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        July 6 - July 13
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Details
        </Link>
      </div>
    </React.Fragment>
  );
}
