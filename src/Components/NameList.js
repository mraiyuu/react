import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Denis",
      age: 21,
      skill: "React",
    },
    {
      id: 2,
      name: "Joe",
      age: 24,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Ricks",
      age: "21",
      skill: "Django",
    },
  ];

  const personsList = persons.map((person) => <Person key={person.id} person={person} />);
  return <div>{personsList}</div>;
}

export default NameList;
