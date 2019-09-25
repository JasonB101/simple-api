package com.simple_api.service;

import com.simple_api.dao.PersonDao;
import com.simple_api.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PersonService {
    private final PersonDao personDao;

    @Autowired
    public PersonService( @Qualifier("postgres") PersonDao personDao) {
        this.personDao = personDao;
    }

    public void addPerson(Person person){
        personDao.insertPerson(person);
    }

    public List<Person> getAllPeople(){
        return personDao.selectAllPeople();
    }

    public Optional<Person> getPersonById(UUID id){
        return personDao.selectPersonById(id);
    }

    public void deletePerson(UUID id){
        personDao.deletePersonById(id);
    }

    public void updatePerson(UUID id, Person newPerson) {
        personDao.updatePersonById(id, newPerson);
    }

}
