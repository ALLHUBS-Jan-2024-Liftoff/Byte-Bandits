package com.bandits.api.bandits_api.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bandits.api.bandits_api.service.RecipeService;

import java.lang.reflect.Array;
import java.util.Arrays;

@RestController
@RequestMapping("/")
public class RecipeController {
    private static final Logger log = LoggerFactory.getLogger(RecipeController.class);
    @Autowired
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/search")
    public ResponseEntity<?> callEndPointToGetRecipeData(@RequestParam (name = "query", required = true, defaultValue = "all") String query, @RequestParam (name = "health",required = true, defaultValue = "") String health) {


        if(!health.isEmpty())
        {
            String[] healthArr = health.split(",");
            health = "&health=" +String.join("&health=",healthArr);
        }
        return ResponseEntity.ok(recipeService.getAllRecipeData(query,health));

    }

}
