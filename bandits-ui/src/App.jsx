import { useState } from 'react'
import{ useEffect } from 'react'
import * as React from 'react';
import axios from 'axios';
import './App.css'

// const API_URL = 'https://api.edamam.com/api/recipes/v2/7bf4a371c6884d809682a72808da7dc2?type=public&app_id=9cf8e5c7&app_key=c09e40e5a30cd7fd27e3a855f484a47b';
const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=turkey&app_key=c09e40e5a30cd7fd27e3a855f484a47b%20%09&app_id=9cf8e5c7&random=true';

function App() {


  
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

  return (
    <div>
      <h1>Recipe List</h1>
      {hits.map((hit, index) =>
          <div key={index}>
            <h3>{hits[index].recipe.label}</h3>
            <img src={hits[index].recipe.image} alt={hits[index].recipe.label} />
            {hits[index].recipe.ingredientLines.map((ingredient, index) =>
              <ul>
                <li key={index}>{ingredient}</li>
              </ul>
            )}
          </div>)
        }
    </div>
  );
}

export default App;

