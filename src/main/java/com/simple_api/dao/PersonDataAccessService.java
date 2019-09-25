package com.simple_api.dao;

import com.simple_api.model.Person;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("postgres")
public class PersonDataAccessService implements PersonDao {

    private final JdbcTemplate jdbcTemplate;

    public PersonDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void insertPerson(UUID id, Person person) {
        final String sql = "INSERT INTO person (id, fName, lName, favColor, age) VALUES (?,?,?,?,?)";

        Object[] newPerson = {id,
                            person.getFName(),
                            person.getLName(),
                            person.getFavColor(),
                            person.getAge()};

        jdbcTemplate.update(sql, newPerson);
    }

    @Override
    public List<Person> selectAllPeople() {
        final String sql = "SELECT id, fName, lName, favColor, age FROM person";

        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String fName = resultSet.getString("fName");
            String lName = resultSet.getString("lName");
            String favColor = resultSet.getString("favColor");
            int age = resultSet.getInt("age");
            return new Person(id, fName, lName, favColor, age);
        });
    }

    @Override
    public Optional<Person> selectPersonById(UUID id) {
        final String sql = "SELECT id, fName, lName, favColor, age FROM person WHERE id = ?";
        Person person = jdbcTemplate.queryForObject(
                sql,
                new Object[]{id},
                (resultSet, i) -> {
                    UUID personId = UUID.fromString(resultSet.getString("id"));
                    String fName = resultSet.getString("fName");
                    String lName = resultSet.getString("lName");
                    String favColor = resultSet.getString("favColor");
                    int age = resultSet.getInt("age");
                    return new Person(personId, fName, lName, favColor, age);
        });

        return Optional.ofNullable(person);
    }

    @Override
    public void deletePersonById(UUID id) {
        final String sql = "DELETE FROM person WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public void updatePersonById(UUID id, Person person) {
        StringBuilder sqlBuilder = new StringBuilder(50);
        sqlBuilder.append("UPDATE person SET fName = ?, ");
        sqlBuilder.append("lName = ?, ");
        sqlBuilder.append("favColor = ?, ");
        sqlBuilder.append("age = ? ");
        sqlBuilder.append("WHERE id = ?");

        final String sql = sqlBuilder.toString();

        Object[] params = {person.getFName(),
                            person.getLName(),
                            person.getFavColor(),
                            person.getAge(),
                            id};

        jdbcTemplate.update(sql, params);
    }
}
