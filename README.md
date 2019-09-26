# simple-api

#### Description

A simple API using Java Spring boot, PostgreSQL, and React.

Insert First Name, Last Name, Favorite Color, and Age into a database.



#### Usage

Accepts HTTP requests using localhost:8080/api/v1/person

(PUT, DELETE) Use the person ID as a parameter.

PostgresSQL running on port 5432

###### JSON format

{
  "fName": String,
  "lName": String,
  "favColor": String,
  "age": Integer
}
