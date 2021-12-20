import React, { useState } from "react";

interface Props {
  buttontext: string;
  link: string;
}

const AddPersonForm = (Props) => {
    const [person, setPerson] = useState("");
  return (
    <>
      <section className="formSection">
        <div className="addPersonForm">
          <form action="">
            <label htmlFor="name">Name of frontier:</label>
            <br />
            <input type="text" name="name" id="name" placeholder="Enter name" value={person} onChange={(e) => setPerson(e.target.value)}/>
            <br />
            <input className="submitb" type="submit" value="Submit" />
          </form>
          <p>Hello and welcome to our new Lunch Roulette participant: { person }</p>
        </div>
      </section>
    </>
  );
};

export default AddPersonForm;
