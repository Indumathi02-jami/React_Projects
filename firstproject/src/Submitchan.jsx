import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Submitchan = () => {
  const [userName, setuserName] = useState("");
  const [chanuserName, setchanuserName] = useState("");

  const notify = () => toast("Wow so easy!");

  const getusername = (event) => {
    setuserName(event.target.value);
  };

  const btnchanges = () => {
    console.log("Button clicked!"); // Check console
    setchanuserName(userName);
    notify();
  };
  

  return (
    <div className='container'>
      <h1>Hello {chanuserName}</h1>
      <input type="text" className='input-box' onChange={getusername} />
      <br />
      <button className='sub-btn' onClick={btnchanges}>Submit</button>
      <ToastContainer />
    </div>
  );
};

export default Submitchan;
