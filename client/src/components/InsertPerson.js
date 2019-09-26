import React, { useState, useEffect } from 'react'

const InsertPerson = (props) => {

    const { methods: { savePerson, changeUpdateStatus }, update, people } = props;

    const [inputs, setInputs] = useState({
        fName: "",
        lName: "",
        favColor: "",
        age: ""
    })

    useEffect(() => {
        const updateValues = update[0] ? people.find(x => x.id === update[1]) : {};
        if (update[0]) {
                updateInputs(updateValues.fName,
                updateValues.lName,
                updateValues.favColor,
                updateValues.age
            )
        }
    }, [update, people])

    const changeInput = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const cancelUpdate = () => {
        changeUpdateStatus([false, ""]);
        updateInputs();
    }

    const updateInputs = (fName = "", lName = "", favColor = "", age = "") => {
        setInputs({
            fName,
            lName,
            favColor,
            age
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
            <div style={{ display: "flex" }}>
                <button onClick={() => {
                    savePerson(inputs);
                    updateInputs();
                }}>Save</button>
                <div className="spacer" ></div>
                {update[0] && <button onClick={() => cancelUpdate()}>Cancel</button>}

            </div>
        </div>
    )
}

export default InsertPerson
