import React from "react";
//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home, About, Events, Contact, Error404, Services, CompanyHistory, Location } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/services" element={<Services />} />
          <Route path="/history" element={<CompanyHistory />} />
          <Route path="/location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;


// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and Save to Reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );