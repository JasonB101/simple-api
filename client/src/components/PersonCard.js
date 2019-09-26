import React from 'react'

function PersonCard(props) {
    let { id, fName, lName, favColor, age, methods: {deletePerson, changeUpdateStatus} } = props
    return (
        <div className="personCard">
            <h2>{fName}</h2>
            <h2>{lName}</h2>
            <h3>{`Favorite Color: ${favColor}`}</h3>
            <h3>{`Age: ${age}`}</h3>
            <h4>{id}</h4>
            <div style={{display: "flex"}}>
                <button onClick={() => {
                    deletePerson(id);
                }}>delete</button>
                <div className="spacer"> </div>
                <button onClick={() => changeUpdateStatus([true, id])}>update</button>
            </div>

        </div>
    )
}

export default PersonCard
