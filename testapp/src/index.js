import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./index.css";
//import App from './App';
import reportWebVitals from './reportWebVitals';

const lakeList = [
  "Echo Lake",
  "Maud Lake",
  "Cascade Lake"
]

const lakeSet = [
  {id: "1", name: "Echo", trailhead: "Sauld"},
  {id: "2", name: "Maud", trailhead: "Wrights"},
  {id: "3", name: "Cascade", trailhead: "Bayview"}
]

function Hello({ prolib, result }) {
  return (
    <div>
      <center>
        <h1>Welcome to {prolib}!</h1>
        <p>Let's <code>build awesome</code> {result}</p>
      </center>
    </div>
  )
}

function Appcell({ lakes }) {
  return (
    <ul>
      {lakes.map(lake => <li key={lake.toString()}>{lake}</li> )}
    </ul>
  );
}

function SetCell({ lakes }) {
  return (
    <div>
      {lakes.map(lake => (
        <div key={lake.id}>
          <h3>{lake.name}</h3>
          <p>Accessed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

function StateChange() {
  const [status, setStatus] = useState("Open");
  const [manager, setManager] = useState("Alex");
  return (
    <>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Rachael")}>
          New Manager
        </button>
        <button onClick={() => setManager("Alex")}>
          Previous Manager
        </button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Open")}>
          Open
        </button>
        <button onClick={() => setStatus("Back in 5")}>
          Break
        </button>
        <button onClick={() => setStatus("Closed")}>
          Closed
        </button>
      </div>
    </>
  );
}

function EffectDemo() {

  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`)
  }, [val]);
  useEffect(() => {
    console.log(`field 2: ${val2}`)
  }, [val2]);

  return(
    <>
      <br />
      <br />
      <div>
        <label>
          First Statement: 
          <input value={val.toString()} onChange={e => setVal(e.target.value)} />
        </label>
        <br />
        <label>
          Second Statement: 
          <input value={val2.toString()} onChange={e => setVal2(e.target.value)} />
        </label>
      </div>
    </>
  );
}

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) {
    return (
      <div>
        <h2>{data.login}</h2>
        <img src={data.avatar_url} width={100} alt=""/>
      </div>
    );
  }
  return null;
}



ReactDOM.render(
  <React.StrictMode>
    <>
      <Hello prolib="Probot" result="stuffs" />
      <Appcell lakes={lakeList} />
      <SetCell lakes={lakeSet} />
      <StateChange />
      <EffectDemo />
      <GitHubUser login="envs" />
    </>
  </React.StrictMode>,
  document.querySelector("#root")
);
 
reportWebVitals();







// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
