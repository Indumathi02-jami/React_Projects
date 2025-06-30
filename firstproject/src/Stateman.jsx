
import React from 'react';

import { useState } from 'react';

const Stateman=()=>{
    const [city, setcity] = useState("vizag")
    if(city === "vizag"){
        setcity("GOA")
    }
  return(
    <div>
      <h1>I Like {city}</h1>
    </div>
  )
}

export default Stateman

