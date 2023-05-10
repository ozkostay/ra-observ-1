import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from '../store/photosSlice';
import { v4 as uuidv4 } from 'uuid';

export default function StarForm() {
  const dispatch = useDispatch();
  const [currentFile, setcurrentFile] = useState();
  
  function fnSubmit(e) {
    e.preventDefault();
    const id = uuidv4();
    const obj = {
      id: id,
      fileName: currentFile,
    }
    dispatch(addPhoto(obj))
  }

  function fileOnChange(e) {
    e.preventDefault();
    setcurrentFile(URL.createObjectURL(e.target.files[0]));
  }

  return <>
    <form onSubmit={(e) => fnSubmit(e)}>
      <p>Добавление файла</p>
        <br></br>
        <br></br>
        <input type="file" name='file' onChange={fileOnChange}></input>
        <input type="submit" value="Добавить"></input>
    </form>
  </>
}