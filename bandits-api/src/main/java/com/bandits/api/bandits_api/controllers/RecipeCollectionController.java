package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.Recipe;
import com.bandits.api.bandits_api.models.RecipeDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.RecipeRepository;
import com.bandits.api.bandits_api.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeCollectionController {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserController userController;

    ModelMapper modelMapper = new ModelMapper();

    @GetMapping
    public ResponseEntity<List<RecipeDTO>> getSavedRecipes(HttpSession session) {
        User user = userController.getUserFromSession(session);
        if (user != null) {
            List<Recipe> recipes = recipeRepository.findByUser(user);
            List<RecipeDTO> recipeDTO = recipes.stream()
                    .map(recipe -> modelMapper.map(recipe, RecipeDTO.class))
                    .collect(Collectors.toList());
//            System.out.println("recipes: " + recipes.size());
//            for (int i = 0; i < recipes.size(); i++) {
//                System.out.println(recipes.get(i).getId());
//            }
            System.out.println(recipeDTO);
            return ResponseEntity.ok(recipeDTO);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PostMapping("/delete")
    public void deleteRecipe(@RequestParam Long recipeId) {
        recipeRepository.deleteById(recipeId);
    }

    @PostMapping("/new")
    public ResponseEntity<RecipeDTO> createTodo(HttpSession session, @RequestBody Recipe recipe) {
        User user = userController.getUserFromSession(session);
        if (user != null) {
            Recipe newRecipe = new Recipe();
            newRecipe.setUri(recipe.getUri());
            newRecipe.setLabel(recipe.getLabel());
            newRecipe.setImage(recipe.getImage());
            newRecipe.setSource(recipe.getSource());
            newRecipe.setUser(user);
            recipeRepository.save(newRecipe);
            RecipeDTO newRecipeDTO = modelMapper.map(newRecipe, RecipeDTO.class);
            return ResponseEntity.ok(newRecipeDTO);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}