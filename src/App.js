import React, { useState } from "react";
import './App.css';


const Banner = (props) => {
 return (
  <h1>{props.text}</h1>
 )
}

const App = () => {
  
  const [rocks, setRocks] = useState(0)
  const [live, setLive] = useState(0)
  const [sucks, setSucks] = useState(0)

  return (
    <div >
      <Banner text="How's my code?"/>
      <Banner text="Each line is:"/>
    </div>
  );
}

export default App;
