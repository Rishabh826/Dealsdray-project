import React, { Component } from 'react';

export default class Createempl extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          designation: 'HR',
          course: 'MCA',
          email: '',
          gender: 'Male',
          mobileNumber: '',
          image: null
        };
      }
    
      handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
    
      handleImageChange = (event) => {
        this.setState({ image: event.target.files[0] });
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { name, designation, course, email, gender, mobileNumber, image } = this.state;
        
        const employeeData = { name, designation, course, email, gender, mobileNumber, image };
        // Call the addEmployee function passed down from the parent component
        this.props.addEmployee(employeeData);
        // Clear the form fields after submission
        this.setState({
          name: '',
          designation: 'HR',
          course: 'MCA',
          email: '',
          gender: 'Male',
          mobileNumber: '',
          image: null
        });
      }
    
      render() {
        return (
          <div style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFL2a7cvIoDrvLirZ39079o4GdjsZEzXyJFmvEwxYPw&s)', color: 'white' }}>
            <h1>Create Employee </h1>
            <form className="container mt-4" onSubmit={this.handleSubmit}>
              <div className="row g-3" style={{ marginTop: '4rem' }}>
                <div className="col-md-4">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="designation" className="form-label">Designation:</label>
                  <select className="form-select" id="designation" name="designation" value={this.state.designation} onChange={this.handleInputChange} style={{ width: '20rem' }}>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Accounting/Finance">Accounting/Finance</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="course" className="form-label">Course:</label>
                  <select className="form-select" id="course" name="course" value={this.state.course} onChange={this.handleInputChange} style={{ width: '20rem' }}>
                    <option value="MCA">MCA</option>
                    <option value="BCA">BCA</option>
                    <option value="BSC">BSC</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="gender" className="form-label">Gender:</label>
                  <select className="form-select" id="gender" name="gender" value={this.state.gender} onChange={this.handleInputChange} style={{ width: '20rem' }}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
                  <input type="tel" className="form-control" id="mobileNumber" name="mobileNumber" value={this.state.mobileNumber} onChange={this.handleInputChange} required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="imageUpload" className="form-label">Upload Image:</label>
                  <input type="file" id="imageUpload" name="image" accept="image/*" onChange={this.handleImageChange} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        );
      }
}
