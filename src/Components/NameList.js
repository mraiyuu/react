import React from "react";
import Person from "./Person";

function NameList() {
    const names = ['Denis', 'Joe', 'Ricks', 'Ricks']
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

  const nameList = names.map((name, index) => <h2 key={name}>{index} {name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
