//package com.bandits.api.bandits_api.controllers;
//
//
//import com.bandits.api.bandits_api.service.RecipeService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/")
//@CrossOrigin(origins = "http://localhost:5173")
//public class RecipeController {
//
//    @Autowired
//    private final RecipeService recipeService;
//
//    public RecipeController(RecipeService recipeService) {
//        this.recipeService = recipeService;
//    }
//
//    @GetMapping("/chicken")
//    public ResponseEntity<?> callEndPointToGetRecipeData(){
//        return  ResponseEntity.ok(recipeService.getAllChickenRecipeData());
//
//    }
//}
