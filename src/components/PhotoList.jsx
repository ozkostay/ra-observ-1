import React from "react";
import PhotoItem from './PhotoItem';
import { useSelector } from "react-redux";

export default function PhotoList() {
  const photosArr = useSelector((state) => state.photosReducer.photosArr);
  const tempArr = [...photosArr];
  const container = {
    width: 670,
    margin: '0 auto',
    border: '1px solid red',
    display: 'flex',
    flexWrap: 'wrap'
  }

return <>
    <br /> === Фото профиля === <br />
    <br />
    <div style={container}>
      {tempArr.map((item) => <PhotoItem key={item.id} item={item}/>)}
      </div>
  </>
}
