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

const Result = (props) => {
  return (
    <p>{props.text}: {props.count}</p>
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
      <Result 
        text="It Rocks:"
        count= "0" 
        />
      <Result 
        text="I can live with it:"
        count= "0"
        />
      <Result 
        text="It Sucks:"
        count="0"
        />
    </div>
  );
}

export default App;
