import React from "react";

export default function PhotoItem({item}) {
    
  const container = {
    width: '200px',
    height: '200px',
    border: '1px solid black',
    margin: '10px',
    backgroundColor: "red",
  }

  return <>
    <div>
      <img  style={container} src={item.fileName} alt='pic'></img>
    </div>
  </>
}

