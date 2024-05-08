import './App.css';
import Navebar from './components/Navebar';
import Createempl from './components/Createempl';
import Login from './components/Login';
import Editempl from './components/Editempl';
import Employlist from './components/Employlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employeeData) => {
    setEmployees([...employees, employeeData]);
  }

  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Employlist" element={<Employlist employees={employees} />} />
        <Route path="/Createempl" element={<Createempl addEmployee={addEmployee} />} />
        <Route path="/Editempl" element={<Editempl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
