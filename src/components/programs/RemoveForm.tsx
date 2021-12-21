import React, { useState } from "react";


const RemovePersonForm = () => {
  const [person, setPerson] = useState("");
  return (
    <>
      <section className="formSection">
        <div className="addPersonForm">
          <form action="">
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
            <input className="submitb" type="submit" value="Submit" />
          </form>
          <p>
            Goodbye to our frontier friend who is leaving the Lunch Roulette: {person}
          </p>
        </div>
      </section>
    </>
  );
};

export default RemovePersonForm;
