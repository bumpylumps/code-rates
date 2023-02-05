import React, { useState } from "react";
import './App.css';


const Banner = (props) => {
 return (
  <h1>{props.text}</h1>
 )
}

const Button = (props) => {
  return (
    <button 
      className="button"
      onClick={props.handleClick}
      >
        {props.label}
      </button>
  )
}

const Result = (props) => {
  return (
    <p
      className="resultItem"
      id={props.id}
      >
        {props.text}: {props.count}
    </p>
  )
}


const App = () => {
  
  const [rocksCount, setRocksCount] = useState(0)
  const [liveCount, setLiveCount] = useState(0)
  const [sucksCount, setSucksCount] = useState(0)

  
  function rocksClick(rocksCount){
    rocksCount++
    setRocksCount(rocksCount)
  }

  function liveClick(liveCount){
    liveCount++
    setLiveCount(liveCount)
  }

  function sucksClick(sucksCount){
    sucksCount++
    setSucksCount(sucksCount)
  }

  return (
    <div className="main">
      <section className="container">
        <Banner text="How's my code?"/>

        <section className="buttonContainer">
          <Button 
            label="It Rocks!"
            handleClick={() => rocksClick(rocksCount)} 
            />
          <Button 
            label="I can live with it."
            handleClick={() => liveClick(liveCount)} 
            />
          <Button 
            label="It Sucks."
            handleClick={() => sucksClick(sucksCount)} 
            />
        </section>
      </section>

      <section className="container">
        <Banner text="Each line's quality:"/>

        <section className="resultsContainer">
          <Result 
            text="It Rocks"
            count= {rocksCount} 
            />
          <Result 
            id="liveItem"
            text="I can live with it"
            count= {liveCount}
            />
          <Result 
            text="It Sucks"
            count= {sucksCount}
            />
        </section>
      </section>
    </div>
  );
}

export default App;
