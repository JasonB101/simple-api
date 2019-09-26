import React from 'react'

function PersonCard(props) {
    let {id, fname, lname, favColor, age, deletePerson} = props
    return (
        <div className="personCard">
            <h2>{fname}</h2>
            <h2>{lname}</h2>
            <h3>{`Favorite Color: ${favColor}`}</h3>
            <h3>{`Age: ${age}`}</h3>
            <h4>{id}</h4>
            <button onClick={() => {
                deletePerson(id)
                }}>delete</button>
            
        </div>
    )
}

export default PersonCard
