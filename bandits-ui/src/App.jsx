import { useState } from 'react'
import{ useEffect } from 'react'
import * as React from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.edamam.com/api/recipes/v2/7bf4a371c6884d809682a72808da7dc2?type=public&app_id=9cf8e5c7&app_key=667f0b9db2fc945f8eade6b12b9926ed')
      .then(response => setData(response.data));
  }, []);

  return (
    <div>
      <h1>{data.recipe.label}</h1>
      <img src={data.recipe.image} alt={data.recipe.label} />
      <ul>
        {data.recipe.ingredientLines.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

