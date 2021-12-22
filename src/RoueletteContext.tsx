import React, { useState } from "react";

interface IPerson {
  name: string;
}

interface IRouletteContext {
  persons: IPerson[];
  removePersonFromList: (personName: string) => void;
  addPersonToList: (personName: string) => void;
}

export const RouletteContext = React.createContext<IRouletteContext>({
  persons: [],
  removePersonFromList: () => ({}),
  addPersonToList: () => ({}),
});

export const RouletteContextProvider: React.FunctionComponent = (props) => {
  const [persons, setPersons] = useState<IPerson[]>(
    JSON.parse(window.localStorage.getItem("persons") ?? "[]") as IPerson[]
  );
  const removePersonFromList = (personName: string) => {
    const newPersons = persons.filter((p) => p.name != personName);
    setPersons(newPersons);
    window.localStorage.setItem("persons", JSON.stringify(newPersons));
  };

  const addPersonToList = (personName: string) => {
    const newPersons = [...persons, { name: personName}];
    setPersons(newPersons);
    window.localStorage.setItem("persons", JSON.stringify(newPersons));
  };

  return (
    <RouletteContext.Provider
      value={{ persons, removePersonFromList, addPersonToList }}
    >
      {props.children}
    </RouletteContext.Provider>
  );
};
