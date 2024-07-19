import { useState } from 'react'
import{ useEffect } from 'react'
import * as React from 'react';
import axios from 'axios';
import './App.css'

// const API_URL = 'https://api.edamam.com/api/recipes/v2/7bf4a371c6884d809682a72808da7dc2?type=public&app_id=9cf8e5c7&app_key=c09e40e5a30cd7fd27e3a855f484a47b';
const baseURL = 'https://api.edamam.com/api/recipes/v2/7bf4a371c6884d809682a72808da7dc2?type=public&app_id=9cf8e5c7&app_key=c09e40e5a30cd7fd27e3a855f484a47b';

function App() {

  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);
  
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!"

console.log(post);

  return (
    <div>
      <h1>{post.recipe.label}</h1>
      <img src={post.recipe.image} alt={post.recipe.label} />
      <ul>
        {post.recipe.ingredientLines.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

