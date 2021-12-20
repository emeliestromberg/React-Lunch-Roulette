import { useState } from "react";
import React from "react";

const ParticipantList = () => {
  const [list, setlist] = useState([
    { name: "Karin Odin", id: 1 },
    { name: "Ulrika Blomström", id: 2 },
    { name: "Sofia Rokkones", id: 3 },
    {},
  ]);

  return (
    <>
      <div>
        <h2>Here is everyone who participates in the Lunch Roulette</h2>
        {list.map((list) => (
          <div key={list.id}>
            <p>{list.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParticipantList;
