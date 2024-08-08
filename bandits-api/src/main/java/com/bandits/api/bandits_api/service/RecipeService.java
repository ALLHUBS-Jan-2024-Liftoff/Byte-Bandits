package com.bandits.api.bandits_api.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

@Service
public class RecipeService {
    private  static final String url = "https://api.edamam.com/api/recipes/v2";

    @Value("${rec.api.id}")
    private String app_id;

    @Value("${rec.api.key}")
    private String app_key;

    private static final Logger log = LoggerFactory.getLogger(RecipeService.class);

    @Autowired
    private RestTemplate template = new RestTemplate();

    public Object getAllRecipeData(String query, String healthQuery) {
        try{
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type","application/json");
            headers.set("Content-Language","en");
            //Object response = template.getForObject("https://api.edamam.com/api/recipes/v2?app_id=ab03e048&app_key=bf527ba933a3e60652df268be4c3b0c0&type=public&q=Chicken", String.class);
            ResponseEntity<String> response = template.exchange(url+"?app_id="+app_id+"&app_key="+app_key+"&type=public&q="+query+healthQuery, HttpMethod.GET,new HttpEntity<>(headers),String.class);
            log.info("Query Output:{}",healthQuery);
            log.info("Output:{}",response.getBody());

            return response.getBody();
        }
        catch (Exception e){
            log.error("Something Went Wrong",e);
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "exception while calling",
                    e
            );
        }

    }

}