package com.simple_api.dao;

import com.simple_api.model.Person;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PersonDao {

    void insertPerson(UUID id, Person person);

    default void insertPerson(Person person){
        UUID id = UUID.randomUUID();
        insertPerson(id, person);
    }

    List<Person> selectAllPeople();

    Optional<Person> selectPersonById(UUID id);

    void deletePersonById(UUID id);

    void updatePersonById(UUID id, Person person);

}
