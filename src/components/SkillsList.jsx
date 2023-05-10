import React from "react";
import { useSelector } from "react-redux";
import SkillsItem from "./SkilsItem";


export default function SkillsList() {
  // const {  } = useSelector(state => state.skill);
  const skillsArr = useSelector((state) => state.skillsReducer.skillsArr);

  console.log('=================== skillsArr', skillsArr)

  let nextId = 1;
  const tempArr = [
    { id: nextId++, name: "React" },
    { id: nextId++, name: "Redux" },
    { id: nextId++, name: "Redux Thunk" },
    { id: nextId++, name: "RxJS" },
    { id: nextId++, name: "Redux Observable" },
    { id: nextId++, name: "Redux Saga" },
  ];
  const container = {
    width: 300,
    margin: '0 auto',
    padding: '10px',
    border: '1px solid red',
    textAlign: 'left'
  }

  console.log(tempArr);

  return <div style={container}>
    {tempArr.map((item) => <SkillsItem key={item.id} item={item}/>)}
  </div>
}