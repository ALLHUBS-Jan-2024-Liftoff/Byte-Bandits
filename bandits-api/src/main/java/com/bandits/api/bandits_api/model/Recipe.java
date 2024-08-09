package com.bandits.api.bandits_api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String uri;
    private String label;
    private String image;
    private String source;

    public Recipe() {
    }

    public Recipe(Long id, String uri, String label, String image, String source) {
        this.id = id;
        this.uri = uri;
        this.label = label;
        this.image = image;
        this.source = source;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }
}
























//package com.bandits.api.bandits_api.model;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.Id;
//
//import java.util.Objects;
//
//public class Recipe {
////
////    private String uri;
////
//////
//////    public Recipe(){}
//////
//////    public Recipe(String name) {
//////        this.name = name;
//////    }
//////
////
////    public String getUri() {
////        return uri;
////    }
//
//
////    @Override
////    public boolean equals(Object o) {
////
////        if (this == o)
////            return true;
////        if (!(o instanceof Recipe))
////            return false;
////        Recipe recipe = (Recipe) o;
////        return Objects.equals(this.id, recipe.id) && Objects.equals(this.name, recipe.name);
////    }
////
////    @Override
////    public int hashCode() {
////        return Objects.hash(this.id, this.name);
////    }
//}
