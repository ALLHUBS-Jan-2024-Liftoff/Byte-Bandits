package com.bandits.api.bandits_api.controller;

import com.bandits.api.bandits_api.model.Recipe;
import com.bandits.api.bandits_api.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeCollectionController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping
    public List<Recipe> getAllRecipes(){
        return recipeRepository.findAll();
    }

    @PostMapping("/delete")
    public void deleteRecipe(@RequestParam Long recipeId) {
        recipeRepository.deleteById(recipeId);
    }

    @PostMapping("/new")
    public Recipe saveNewRecipe(@RequestBody Recipe newRecipe) {
        return recipeRepository.save(newRecipe);
//        return ResponseEntity.ok(HttpStatus.OK);
    }

//    @PostMapping("/new")
//    public Recipe addNewRecipe(@RequestParam String uri, @RequestParam String label, @RequestParam String image, @RequestParam String source){
//        Recipe newRecipe = new Recipe();
//        newRecipe.setUri(uri);
//        newRecipe.setLabel(label);
//        newRecipe.setImage(image);
//        newRecipe.setSource(source);
//        return recipeRepository.save(newRecipe);
//    }
}