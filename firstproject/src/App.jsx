

import React from 'react';

import Sample from './Sample';
import UserPage from './UserPage';


const car = {
  name:"toyoto",
  year: 2023,
  color: "red"
}

function App(){
  return(
    <div>
      <h1>welcome to react</h1>
      <Sample/>
      <UserPage/>
    </div>
  )
}

export default App