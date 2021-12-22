import React, { useState, useContext } from "react";
import "../../styles/AddPersonPage.css";
import { RouletteContext } from "../../RoueletteContext";


const AddPersonForm = () => {
    const [person, setPerson] = useState("");

  const { addPersonToList, persons } = useContext(RouletteContext);

  const personExists = persons.some(p=>p.name === person) 

  return (
    <>
      <section className="formSection">
        <div className="addPersonForm">
          <label htmlFor="name">Name of frontier:</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />
          <br />
          {!personExists && (
            <button className="submitb" onClick={() => addPersonToList(person)}>
              Add
            </button>
          )}
          {personExists && <p>Person is already on the list</p>}
        </div>
      </section>
      <div>
        <p>Hello and welcome to our new Lunch Roulette participant: {person}</p>
      </div>
    </>
  );
};

export default AddPersonForm;
