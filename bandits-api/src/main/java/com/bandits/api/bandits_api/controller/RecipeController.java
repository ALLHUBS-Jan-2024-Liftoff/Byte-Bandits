package com.bandits.api.bandits_api.controller;


import com.bandits.api.bandits_api.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class RecipeController {

    @Autowired
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/search/{ingredients}")
    public ResponseEntity<?> callEndPointToGetRecipeData(@PathVariable String ingredients) {
        return ResponseEntity.ok(recipeService.getAllRecipeData(ingredients));

    }

    @GetMapping("/search/{ingredients}/{diets}")
    public ResponseEntity<?> callEndPointToGetRecipeDataByDiet(@PathVariable String ingredients, @PathVariable String diets) {
        return ResponseEntity.ok(recipeService.getRecipeDataByDiets(ingredients, diets));

    }
}
