package com.simple_api.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class Person {
    private final UUID id;

    @NotBlank
    private final String fName;
    private final String lName;
    private final String favColor;
    private final int age;


    public Person(@JsonProperty("id") UUID id,
                  @JsonProperty("fName") String fName,
                  @JsonProperty("lName") String lName,
                  @JsonProperty("favColor") String favColor,
                  @JsonProperty("age") int age) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.favColor = favColor;
        this.age = age;
    }

    public UUID getId() {
        return id;
    }
    public String getFName() {
        return fName;
    }
    public String getLName() { return lName; }
    public String getFavColor() { return favColor; }
    public int getAge(){ return age; }
}
