
import React from 'react'
import { useState } from 'react'
const Click = () => {
    const [number, setNumber]=useState(0);

    const increment=()=>{
        setNumber(number+1)
    }
    const decrement=()=>{
        if(number>1){
            setNumber(number-1)
        }
        
    }
    const reset=()=>{
        setNumber(0)
    }

  return (
    <div>
        
            
                {number}
                <button onClick={increment}>Increament</button>
                <button onClick={decrement}>
                    Decrement
                </button>
                <button onClick={reset}>Reset</button>
            
    </div>
  )
}

export default Click