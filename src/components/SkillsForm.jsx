import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap } from 'rxjs/operators';
import { updateSkills } from '../store/skillsSlice';
import { v4 as uuidv4 } from 'uuid';

export default function StarForm() {
  const dispatch = useDispatch();
  const [skillStartLetter, setSkillStartLetter] = useState('');
  
  // function fnSubmit(e) {
  //   e.preventDefault();
  //   const id = uuidv4();
  //   const obj = {
  //     id: id,
  //     fileName: currentFile,
  //   }
  //   dispatch(addPhoto(obj))
  // }

  function inputOnChange(e) {
    e.preventDefault();
    console.log('=== skillStartLetter ', e.target.value);
    //etcurrentFile(URL.createObjectURL(e.target.files[0]));
    setSkillStartLetter(e.target.value);
    // console.log('=== skillStartLetter ', skillStartLetter);
  }

  return <>
    <form>
      <p>Выборка</p>
        <br></br>
        <br></br>
        <input 
          type="text" 
          placeholder = 'Type something to search...' 
          value={skillStartLetter} 
          onChange={(e) => inputOnChange(e)}>
        </input>
    </form>
  </>
}