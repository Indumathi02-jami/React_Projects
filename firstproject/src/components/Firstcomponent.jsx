
import React from 'react';



const Firstcomponent=(props)=>{
    const {name,year,color}= props.car
  return(
    <div>
      <div>{name}</div>
      <div>{year}</div>
      <div>{color}</div>
    </div>
  )
}

export default Firstcomponent
