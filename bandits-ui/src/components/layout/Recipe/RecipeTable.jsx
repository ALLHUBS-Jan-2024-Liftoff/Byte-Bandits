import React, { useEffect } from 'react'
import { useState } from 'react';
import { Box, Button, Container, FormControl, FormGroup, Input, InputLabel, List, ListItem, ListItemText, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { CloseFullscreen, Label } from '@mui/icons-material';
import CheckBoxGroup from '../../form/Checkbox/CheckboxGroup';
import RecipeCardView from './RecipeCardView';

function RecipeTable() {

    const [recipes, setRecipes] = useState([]); // Array instead of object
    const [txtIngredients, setTxtIngredients] = useState(''); 

    
    const dietsList = ['kosher', 'vegan', 'vegetarian'];
    const allergiesList = ['dairy-free', 'egg-free', 'soy-free'];


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

    const [selectedValue, setSelectedValue] = useState('');

    const handleDropDownChange = (event) => {
      setSelectedValue(event.target.value);
    };

    const handleSubmit = (event) => {
        // Prevent default form submission
        event.preventDefault();

        const ingredients = (txtIngredients.length < 2) ? 'null' : txtIngredients;

        
        const selectedDietsArr = (diets.length == 0) ? '' : Object.keys(diets).filter((diet) => diets[diet]).map((diet) => `${diet}`);
        const selectedAllergiesArr = (allergies.length == 0) ? '' : Object.keys(allergies).filter((allergy) => allergies[allergy]).map((allergy)=> `${allergy}`);

        //useEffect(() => {
        let url = "";
        let health = "";
        console.log(ingredients,selectedDietsArr,selectedAllergiesArr, "list")
        if(selectedDietsArr.length > 0 || selectedAllergiesArr.length > 0){
            
            url =ingredients
            health = selectedDietsArr.concat(selectedAllergiesArr).join(',')
        }
        else{
            url = ingredients
        }

            const fetchData = async () => {
              const queryParams = new URLSearchParams();
              queryParams.append('health',health);
              queryParams.append('query', url);
                const data = await fetch(`http://localhost:8080/search?${queryParams}`)
               .then(response => response.json())
               .then(response => {
                   setRecipes(response.hits);
                   console.log(response.hits);
               }
               )
               .catch(err => console.error(err,"Error"));
            }    
            fetchData();
         // }, []);
    };


    function GetRecipesHtml() {
        recipes.map(recipe=>{
            console.log(recipe.recipe.cuisineType)
        })
    }

    const filterByMealTypeAndGroupByCusineType = recipes.filter(recipe=>recipe.recipe.mealType == selectedValue)
                                                            .reduce((acc, rec) => {
                              // Initialize the category if it doesn't exist in the accumulator
                              if (!acc[rec.recipe.cuisineType]) {
                              acc[rec.recipe.cuisineType] = [];
                              }
      // Add the item to the appropriate category
      acc[rec.recipe.cuisineType].push(rec);
      return acc;
    }, {});

    console.log(filterByMealTypeAndGroupByCusineType, 'group by type')
  GetRecipesHtml();
  return (
    <>
        <Typography variant='h1' sx={{fontSize:'2rem',py:'1rem', color:'#111', fontWeight:'bold'
        }}>Let's Create your meal plan</Typography>
        <Box sx={{width:'100%'}}>
          <form onSubmit={handleSubmit}>
            <Container sx={{textTransform:'capitalize',display:'flex',flexDirection:'row', flexWrap: 'wrap'}}> 
              <FormControl sx={{ flexBasis: '50%'}}>
                <InputLabel htmlFor='txt-ingredients'>Ingredients</InputLabel>
                  <OutlinedInput
                    label="Ingredients"
                    id="txt-ingredients"
                    type="text"
                    value={txtIngredients}
                    onChange={handletxtIngredientsChange}
                    required="true" sx={{width:'80%'}}/>
              </FormControl>
              <FormControl sx={{ flexBasis: '50%'}}>
                <InputLabel htmlFor="select-meal-type">Meal Type</InputLabel>
                  <Select
                    value={selectedValue}
                    onChange={handleDropDownChange}
                    label="mealType"
                    id="select-meal-type"
                    required="true" sx={{width:'60%'}}
                  >
                    <MenuItem value={'breakfast'}>Breakfast</MenuItem>
                    <MenuItem value={'lunch/dinner'}>Lunch</MenuItem>
                    <MenuItem value={'lunch/dinner'}>Dinner</MenuItem>
                  </Select>
              </FormControl>
              <CheckBoxGroup options={dietsList} checkedItems={diets} onChange={handleDietsChange} labelFor='Dietery Option'/>
              <CheckBoxGroup options={allergiesList} checkedItems={allergies} onChange={handleAllergiesChange} labelFor='Allergy Option'/>
                <FormGroup sx={{ flexBasis: '100%'}}>
                <Button type="submit" sx={{ width:'15rem', background:'#555', color:'#fff','&:hover': {
                        backgroundColor: 'green', // Background color on hover
        }}}>Search</Button>
                </FormGroup>
            </Container>
            </form>
        </Box>
        <RecipeCardView data={recipes} />
    </>

  )
}

export default RecipeTable