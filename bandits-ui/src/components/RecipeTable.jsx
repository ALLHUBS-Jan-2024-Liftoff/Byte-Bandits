import React, { useEffect } from 'react'
import { useState } from 'react';

function RecipeTable() {

    const [recipes, setRecipes] = useState([]); // Array instead of object
    const [txtIngredients, setTxtIngredients] = useState(''); 

    
    const handletxtIngredientsChange = (event) => {
        setTxtIngredients(event.target.value);
        console.log(txtIngredients)
    };

    const handleSubmit = (event) => {
        // Prevent default form submission
        event.preventDefault();

        let query = txtIngredients;
        //useEffect(() => {
            const fetchData = async () => {
               const data = await fetch(`http://localhost:8080/search?sQuery=${query}`)
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