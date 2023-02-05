import React, { useState } from "react";
import './App.css';


const Banner = (props) => {
 return (
  <h1>{props.text}</h1>
 )
}

const Button = (props) => {
  return (
    <button>{props.label}</button>
  )
}


const App = () => {
  
  const [rocks, setRocks] = useState(0)
  const [live, setLive] = useState(0)
  const [sucks, setSucks] = useState(0)

  return (
    <div >
      <Banner text="How's my code?"/>
      <Button label="It Rocks!" />
      <Button label="I can live with it." />
      <Button label="It Sucks." />
      <Banner text="Each line's quality:"/>
    </div>
  );
}

export default App;
