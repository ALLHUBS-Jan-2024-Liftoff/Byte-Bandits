import React, { useEffect } from 'react'
import { useState } from 'react';

function RecipeTable() {

    const [recipes, setRecipes] = useState([]); // Array instead of object

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
    useEffect(() => {
        const fetchData = async () => {
           const data = await fetch(`http://localhost:8080/chicken`)
           .then(response => response.json())
           .then(response => {
               setRecipes(response.hits);
               console.log(response.hits);
           }
           )
           .catch(err => console.error(err));
        }
      
        fetchData();
      }, []);

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
        <ul>
            {DisplayRecipeMenu}
        </ul>
    </>

  )
}

export default RecipeTable