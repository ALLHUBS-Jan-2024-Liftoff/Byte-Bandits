package com.bandits.api.bandits_api.models.dto;

import com.bandits.api.bandits_api.models.Recipe;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private int age;
//    // Shouldn't reference entities directly
//    private List<Recipe> recipes;

}
