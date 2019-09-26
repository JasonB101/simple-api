import React, { useState } from 'react'

const InsertPerson = (props) => {

    const { methods: { savePerson, changeUpdateStatus } } = props;

    const [inputs, setInputs] = useState({
        fName: "",
        lName: "",
        favColor: "",
        age: ""
    })

    const changeInput = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    return (
        <div className="insertPerson">
            <h5><p>First Name: </p><input onChange={(e) => changeInput(e.target.name, e.target.value)}
                type="text"
                name="fName"
                value={inputs.fName} />
            </h5>
            <h5><p>Last Name: </p><input onChange={(e) => changeInput(e.target.name, e.target.value)}
                type="text"
                name="lName"
                value={inputs.lName} />
            </h5>
            <h5><p>Favorite Color: </p><input onChange={(e) => changeInput(e.target.name, e.target.value)}
                type="text"
                name="favColor"
                value={inputs.favColor || ""} />
            </h5>
            <h5><p>Age: </p><input onChange={(e) => changeInput(e.target.name, e.target.value)}
                type="text"
                name="age"
                value={inputs.age} />
            </h5>

            <button onClick={() => {
                savePerson(inputs);
                setInputs({
                    firstName: "",
                    lastName: "",
                    favColor: "",
                    age: ""
                })
            }}>Save</button>

        </div>
    )
}

export default InsertPerson
