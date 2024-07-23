import React, { useEffect } from 'react'
import { useState } from 'react';
import CheckboxGroup from './CheckboxGroup';

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

    const handleSubmit = (event) => {
        // Prevent default form submission
        event.preventDefault();

        const ingredients = txtIngredients;
        const selectedDietsArr = Object.keys(diets).filter((diet) => diets[diet]);
        const selectedAllergiesArr = Object.keys(allergies).filter((allergy) => allergies[allergy]);

        console.log(selectedDietsArr)
        //useEffect(() => {
            const fetchData = async () => {
               const data = await fetch(`http://localhost:8080/search/${ingredients}/${selectedDietsArr}`)
               .then(response => response.json())
               .then(response => {
                   setRecipes(response.hits);
                   console.log(response.hits);
               }
               )
               .catch(err => console.error(err));
            }    
            fetchData();
         // }, []);
    };


    // async function initProducts() {
    //     await fetch(`http://localhost:8080/chicken`)
    //         .then(response => response.json())
    //         .then(response => {
    //             setRecipes(response.hits);
    //             console.log(response.hits);
    //         }
    //         )
    //         .catch(err => console.error(err));
    // }


    function GetRecipesHtml() {
        console.log(recipes[0])


        recipes.map(recipe=>{
            console.log(recipe.recipe.label)
        })
    }

    const DisplayRecipeMenu = recipes.map(r => (
        <li>
           <h3>{r.recipe.label}</h3>
           <p>Cusine Type: {r.recipe.cuisineType}</p>
           <img src={r.recipe.image}></img>
           <ul>
           <h4>Ingredients</h4>
            {r.recipe.ingredients.map(x=>(
                    <ul>
                        <li>Name: {x.food}</li>
                        <li>Text: {x.text}</li>
                        <li>Quantiy: {x.quantity}</li>
                    </ul>
                ))}
           </ul>
        </li>

    ))

    GetRecipesHtml();
  return (
    <>
        <div>RecipeTable</div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Ingredients:</label>
                    <input
                        type="text"
                        value={txtIngredients}
                        onChange={handletxtIngredientsChange}
                    />
                </div>
                <CheckboxGroup
                    title="diets"
                    options={dietsList}
                    checkedItems={diets}
                    onChange={handleDietsChange}
                />
                <CheckboxGroup
                    title="allergies"
                    options={allergiesList}
                    checkedItems={allergies}
                    onChange={handleAllergiesChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
        <ul>
            {DisplayRecipeMenu}
        </ul>
    </>

  )
}

export default RecipeTable