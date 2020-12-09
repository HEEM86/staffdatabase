import React from "react";
import './App.css';
import StaffDirectory from "./components/StaffDirectory";
import EmployeeDirectory from "./components/directory";
import Jumbo from "./components/Jumbo";

function App() {
  return (
    <div className="App">
      <Jumbo/>
      <EmployeeDirectory/>
      <StaffDirectory />;
    </div>
  );
}

export default App;
