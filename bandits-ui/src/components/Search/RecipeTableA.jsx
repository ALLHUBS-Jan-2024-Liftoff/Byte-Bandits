import React, { useEffect } from 'react'
import { useState } from 'react';
import { Box, Button, Container, FormControl, FormGroup, Input, InputLabel, List, ListItem, ListItemText, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import CheckBoxGroup from '../Checkbox/CheckboxGroup';
import RecipeCardView from './RecipeCardViewA';
import { searchRecipes, addRecipe } from "../../services/recipeService";
import RecipeCardViewA from './RecipeCardViewA';

function RecipeTableA() {



    const [showResults, setShowResults] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const [txtIngredients, setTxtIngredients] = useState(''); 

    
    const dietsList = ['kosher', 'vegan', 'vegetarian','Mediterranean','pescatarian','pork-free','DASH','paleo','keto-friendly'];
    const allergiesList = ['dairy-free', 'egg-free', 'soy-free','fish-free','wheat-free','sesame-free','peanut-free','gluten-free'];


    const [diets, setDiets] = useState(
        dietsList.reduce((acc, diet) => {
          acc[diet] = false;
          return acc;
        }, [])
      );
    
      const [allergies, setAllergies] = useState(
        allergiesList.reduce((acc, allergy) => {
          acc[allergy] = false;
          return acc;
        }, [])
      );
    
      const handleDietsChange = (name, checked) => {
        setDiets({
          ...diets,
          [name]: checked,
        });
      };
    
      const handleAllergiesChange = (name, checked) => {
        setAllergies({
          ...allergies,
          [name]: checked,
        });
      };

    const handletxtIngredientsChange = (event) => {
        setTxtIngredients(event.target.value);
    };

    const handleSubmit = (event) => {
        // Prevent default form submission
        event.preventDefault();

        const ingredients = (txtIngredients.length < 2) ? 'null' : txtIngredients;

        
        const selectedDietsArr = (diets.length == 0) ? [] : Object.keys(diets).filter((diet) => diets[diet]).map((diet) => `&health=${diet}`);
        const selectedAllergiesArr = (allergies.length == 0) ? [] : Object.keys(allergies).filter((allergy) => allergies[allergy]).map((allergy)=> `&health=${allergy}`);

        //useEffect(() => {
        let query = "";
        if(selectedDietsArr.length > 0 || selectedAllergiesArr.length > 0){
            
              query =ingredients+selectedDietsArr.concat(selectedAllergiesArr).join('')

        }
        else{
            query = ingredients
        }
        console.log(query,"query")
        searchRecipes(query)
        .then((response) => {
          setRecipes(response.hits);
        }).catch((error) => {
          console.error("There was an error fetching the recipes!", error);
      });

      setShowResults(true);

    };

  return (
    <>

        <Box sx={{width:'100%', py:'2rem'}}>
        <Typography variant='h1' sx={{fontSize:'1.5rem',p:'1rem 2rem', color:'#111', textAlign:'left', fontWeight:'bold'
        }}>Let's Create your meal plan</Typography>
          <form onSubmit={handleSubmit}>
            <Container sx={{textTransform:'capitalize',display:'flex',flexDirection:'row', flexWrap: 'wrap'}}> 
              <FormControl sx={{ flexBasis: '100%', justifyContent:'left', alignItems:'left'}}>
                  <TextField
                    label="Ingredients"
                    id="txt-ingredients"
                    type="text"
                    value={txtIngredients}
                    onChange={handletxtIngredientsChange}
                    sx={{width:'100%'}}/>
              </FormControl>
              <FormControl sx={{ flexBasis: '100%', justifyContent:'normal'}}>
                <CheckBoxGroup options={dietsList} checkedItems={diets} onChange={handleDietsChange} labelFor='Dietery Option'/>
                <CheckBoxGroup options={allergiesList} checkedItems={allergies} onChange={handleAllergiesChange} labelFor='Allergy Option'/>
              </FormControl>
                <FormGroup sx={{ flexBasis: '100%'}}>
                <Button type="submit" sx={{ width:'15rem', background:'#555', color:'#fff','&:hover': {
                        backgroundColor: 'green', // Background color on hover
        }}}>Search</Button>
                </FormGroup>
            </Container>
            </form>
            {showResults && <RecipeCardViewA recipes={recipes} />}
        </Box>
    </>

  )
}

export default RecipeTableA