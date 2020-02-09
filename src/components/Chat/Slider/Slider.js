import React, { useState, useEffect } from "react";


const Slider = ({ color, setColor, emitChangeColor }) => {  


  const handleOnChange = (e) => {
    setColor(e.target.value);

    emitChangeColor(e.target.value)

  }

  return(
        <input type="range" min={0} max={4} value={color} onChange={handleOnChange} />
  )
}

export default Slider