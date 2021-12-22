import { useContext, useState } from "react";
import React from "react";
import { RouletteContext } from "../../RoueletteContext";


const ParticipantList = () => {
const {persons} = useContext(RouletteContext)


  return (
    <>
      <div>
        <h2>Here is everyone who participates in the Lunch Roulette</h2>
        {persons.map((person, index) => (
          <div key={index}>
            <p>{person.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParticipantList;
