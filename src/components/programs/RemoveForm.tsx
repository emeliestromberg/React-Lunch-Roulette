import React, { useContext, useState } from "react";
import { RouletteContext } from "../../RoueletteContext";


const RemovePersonForm = () => {
  const [person, setPerson] = useState("");

  const {removePersonFromList, persons} = useContext(RouletteContext)
console.log(persons)
  return (
    <>
      <section className="formSection">
        <div className="addPersonForm">
            <label htmlFor="name">Name of frontier:</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
            />
            <br />
            <button className="submitb" onClick={() => removePersonFromList(person)}>
              Delete
            </button>
          <p>
            Goodbye to our frontier friend who is leaving the Lunch Roulette: {person}
          </p>
        </div>
      </section>
    </>
  );
};

export default RemovePersonForm;
