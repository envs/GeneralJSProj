import React, {useState} from "react";
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
  return (
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
  );
}



ReactDOM.render(
  <React.StrictMode>
    <>  // This is React Fragment
      <Hello prolib="Probot" result="stuffs" />
      <Appcell lakes={lakeList}/>
      <SetCell lakes={lakeSet}/>
      <StateChange />
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
