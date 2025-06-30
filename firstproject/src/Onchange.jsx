

import React from 'react';
import {useState,useEffect} from 'react';

const Onchange = () =>{

    const [userName, setuserName] = useState("");
    const getusername=(event) =>{
        setuserName(event.target.value)  
    };
    return(
        <div className='container'>
            <h1>Hello {userName}</h1>
            <input type="text" className='input-box' onChange={getusername}/>
            <br />
            <button className='sub-btn'>Submit</button>
        </div>
    )
}

export default Onchange;