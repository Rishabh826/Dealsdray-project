import React, { Component } from 'react';

export default class Employlist extends Component {
  render() {
    const { employees } = this.props; 
    return (
      <div>
        <h2>Employee List</h2>
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              <strong>Name:</strong> {employee.name}, <strong>Designation:</strong> {employee.designation}, <strong>Course:</strong> {employee.course}, <strong>Email:</strong> {employee.email}, <strong>Gender:</strong> {employee.gender}, <strong>Mobile Number:</strong> {employee.mobileNumber}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
