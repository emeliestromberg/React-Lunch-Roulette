import { useState } from "react";
import React from "react";

let plist: Array<string>;

let plistplay: Array<string>;

const ParticipantList = () => {
  const [list, setlist] = useState([
    { name: "Karin Odin", id: 1 },
    { name: "Ulrika Blomström", id: 2 },
    { name: "Sofia Rokkones", id: 3 },
    {},
  ]);

const fsw = require("fsw");

let text = "Something you want to write in";

fsw.writeFileSync("Participants.txt", text, function (err: any) {
  if (err) {
    return console.log("error");
  }
});

  

const fsr = require("fsr");

fsr.readFile(
  "Participants.txt",
  function (err: any, data: { toString: () => string }) {
    if (err) throw err;

    const arr = data.toString().replace(/\r\n/g, "\n").split("\n");

    for (let i of arr) {
      console.log(i);
    }
  }
);


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
