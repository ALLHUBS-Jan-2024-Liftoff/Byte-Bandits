import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, FormHelperText, InputLabel } from '@mui/material';
import { Margin } from '@mui/icons-material';

const CheckBoxGroup = ({labelFor,options,onChange,checkedItems}) => {
      // Define the options for the checkbox group    
      // Initial state for checkboxes
    //   const [checkedState, setCheckedState] = useState(
    //     options.reduce((acc, option) => {
    //       acc[option.value] = false;
    //       return acc;
    //     }, {})
    //   );
    
      // Handle checkbox change
      const handleChange = (event) => {
        //setCheckedState({
        //   ...checkedState,
        //   [event.target.name]: event.target.checked,
        // });
        // console.log(checkedState)
        const { name, checked } = event.target;
        onChange(name, checked);
        console.log(name, checked)
      };
    
      return (
          <FormGroup sx={{my:'1rem', display:'flex',flexDirection:'row'}}>
            <FormLabel sx={{ flexBasis: '100%', fontSize:'1.3rem', color:'#222'}}>{labelFor}</FormLabel>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={checkedItems[option]}
                    onChange={handleChange}
                    name={option}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
      );
    };
    

export default CheckBoxGroup;
