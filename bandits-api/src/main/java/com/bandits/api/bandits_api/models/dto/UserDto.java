package com.bandits.api.bandits_api.models.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private List<Recipe> recipes;

}
