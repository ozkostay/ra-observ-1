import React from "react";
import SkillsItem from "./SkilsItem";

export default function SkillsList() {
  let nextId = 1;
  const tempArr = [
    { id: nextId++, name: "React" },
    { id: nextId++, name: "Redux" },
    { id: nextId++, name: "Redux Thunk" },
    { id: nextId++, name: "RxJS" },
    { id: nextId++, name: "Redux Observable" },
    { id: nextId++, name: "Redux Saga" },
  ];

  return <>
    <br></br>
    {tempArr.map((item) => <SkillsItem item={item}/>)}
  </>
}