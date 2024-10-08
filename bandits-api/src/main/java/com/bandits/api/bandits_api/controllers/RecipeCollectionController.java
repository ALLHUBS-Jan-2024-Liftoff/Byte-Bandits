package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.Meal;
import com.bandits.api.bandits_api.models.Recipe;
import com.bandits.api.bandits_api.models.data.RecipeDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.MealRepository;
import com.bandits.api.bandits_api.repositories.RecipeRepository;
import com.bandits.api.bandits_api.security.JwtUtil;
import com.bandits.api.bandits_api.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MealRepository mealRepository;

    ModelMapper modelMapper = new ModelMapper();

    @GetMapping
    public ResponseEntity<List<RecipeDTO>> getSavedRecipes(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7); // Remove "Bearer " from the token
        String username = jwtUtil.extractUsername(token); // Extract username from the token

        User user = userRepository.findByUsername(username);

        if (user != null) {
            List<Recipe> recipes = recipeRepository.findByUser(user);
            List<Integer> idFilter = mealRepository.findByRecipeUserId(user.getId())
                    .stream().map(src -> src.getRecipe().getId()).toList();

            List<Recipe> filteredRecipes = recipes.stream()
                    .filter(recipe -> !idFilter.contains(recipe.getId()))
                    .toList();

            List<RecipeDTO> recipeDTO = filteredRecipes.stream()
                    .map(recipe -> modelMapper.map(recipe, RecipeDTO.class))
                    .collect(Collectors.toList());
            System.out.println("ID_FILTER" + idFilter);
            System.out.println("FILTERED" + filteredRecipes);
            System.out.println("ID" + user.getId());
            System.out.println(recipeDTO);
            return ResponseEntity.ok(recipeDTO);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PostMapping("/delete")
    public void deleteRecipe(@RequestParam Integer recipeId) {
        recipeRepository.deleteById(recipeId);
    }

    @PostMapping("/new")
    public ResponseEntity<Map<String, String>> saveNewRecipe(
            @RequestHeader("Authorization") String authHeader, @RequestBody Recipe recipe) {
        String token = authHeader.substring(7); // Remove "Bearer " from the token
        String username = jwtUtil.extractUsername(token); // Extract username from the token

        User user = userRepository.findByUsername(username);
        Map<String, String> responseBody = new HashMap<>();

        if (user != null) {
            recipe.setUser(user);
            recipeRepository.save(recipe);
            responseBody.put("message", "Recipe Saved Successfully!");
            return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
        } else {
            responseBody.put("message", "There was a problem saving the recipe.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
        }
    }
}


//public ResponseEntity<RecipeDTO> saveNewRecipe(HttpSession session, @RequestBody Recipe recipe) {
//    User user = userController.getUserFromSession(session);
//    if (user != null) {
//        Recipe newRecipe = new Recipe();
//        newRecipe.setUri(recipe.getUri());
//        newRecipe.setLabel(recipe.getLabel());
//        newRecipe.setImage(recipe.getImage());
//        newRecipe.setSource(recipe.getSource());
//        newRecipe.setCalories(recipe.getCalories());
//        newRecipe.setFat(recipe.getFat());
//        newRecipe.setCarbs(recipe.getCarbs());
//        newRecipe.setProtein(recipe.getProtein());
//        newRecipe.setUser(user);
//        recipeRepository.save(newRecipe);
//        RecipeDTO newRecipeDTO = modelMapper.map(newRecipe, RecipeDTO.class);
//        return ResponseEntity.ok(newRecipeDTO);
//    } else {
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
//    }
//}