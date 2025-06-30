

import React from 'react';
import {useState,useEffect} from 'react';

const Resizecomp = () =>{
    const[Screensize, setScreensize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateScreensize=() =>{

        setScreensize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

    };

    useEffect(()=>
    {
        window.addEventListener('resize', updateScreensize);

        return()=>{
            window.removeEventListener('resize',updateScreensize);
        };
    },[]);

    return(
        <div>
        
            <h1>Screen size Example</h1>
            <p>Resize the window to see the screen size</p>
            <p style={{color:"Red"}}>width: {Screensize.width}px</p>
            <p style={{color:"Red"}}>Height: {Screensize.height}px</p>
        </div>

    );
    
};

export default Resizecomp

