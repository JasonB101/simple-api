import React, { useState, useEffect } from 'react';
import axios from "axios";
import PersonCard from "./components/PersonCard";
import InsertPerson from "./components/InsertPerson";

const App = () => {
    const [people, setPeople] = useState([]);
    const [update, changeUpdateStatus] = useState([false, ""]);

    useEffect(() => {
        getPeople();
    }, [])

    const getPeople = () => {
        axios.get("http://localhost:8080/api/v1/person")
            .then(result => {
                setPeople(result.data.map(x => {
                    let { id, lname, fname, favColor, age } = x;

                    return {
                        id,
                        fName: fname,
                        lName: lname,
                        favColor,
                        age
                    }
                }))
            })
    }

    const savePerson = (person) => {

        if (update[0]) updatePerson(update[1], person);

        else createNewPerson(person);
    }

    const deletePerson = (id) => {
        axios.delete("http://localhost:8080/api/v1/person/" + id);
        setPeople(people.filter(x => x.id !== id))
    }

    const updatePerson = (id, person) => {
        axios.put("http://localhost:8080/api/v1/person/" + id, person);
        changeUpdateStatus([false, ""])
        setPeople(people.map(x => {
            if (x.id === id) {
                return {
                    ...person,
                    id
                }
            }
            return x
        }))
    }

    const createNewPerson = (person) => {
        axios.post("http://localhost:8080/api/v1/person", person).then(() => getPeople());
    }



    return (
        <div className="app-wrapper">
            <InsertPerson update={update} people={people} methods={{savePerson, changeUpdateStatus}}/>
            <main>
                {people.map(x => <PersonCard key={x.id} {...x} methods={{deletePerson, changeUpdateStatus}} />)}
            </main>

        </div>
    )
}

export default App
