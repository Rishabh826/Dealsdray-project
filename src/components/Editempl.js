import React, { Component } from 'react'

export default class Editempl extends Component {
  render() {
    return (
        
      <div style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFBk-2SXTatWg0UeeS2FlPCnGjKcBLytw8GmeCmjZ6g&s)'}}>
        <h1>Edit Employee</h1>
         <form className="container mt-4" >
              <div className="row g-3" style={{marginTop:'4rem'}}>
                <div className="col-md-4" >
                  <label htmlFor="validationDefault01" className="form-label">Name:</label>
                  <input type="text" className="form-control" id="validationDefault01" required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault02" className="form-label"> Designation</label>
                  <select className="form-select" aria-label="Default select example" style={{ width: '20rem' }}>
                    <option selected>HR</option>
                    <option value="1">Manager</option>
                    <option value="2">Accounting/Finance</option>
                    <option value="3">sales</option>
                  
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault02" className="form-label"> Course</label>
                  <select className="form-select" aria-label="Default select example" style={{ width: '20rem' }}>
                    <option selected>MCA</option>
                    <option value="1">BCA</option>
                    <option value="2">BSC</option>
                   
                  
                  </select>
                </div>
                
            
               
                <div className="col-md-4">
                  <label htmlFor="validationDefault06" className="form-label">Email</label>
                  <input type="text" className="form-control" id="validationDefault06" required style={{ width: '20rem' }} />
                </div>
                
                <div className="col-md-4">
                  <label htmlFor="validationDefault05" className="form-label">Gender</label>
                  <select className="form-select" aria-label="Default select example" style={{ width: '20rem' }}>
                    <option selected>Male</option>
                    <option value="1">Female</option>
                    <option selected>Both</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault06" className="form-label">Mobile number</label>
                  <input type="text" className="form-control" id="validationDefault06" required style={{ width: '20rem' }} />
                </div>
                <div action="/submit-form" method="post" enctype="multipart/form-data">
  <label for="imageUpload">Upload Image:</label>
  <input type="file" id="imageUpload" name="image" accept="image/*"/>
  <button type="submit">Submit</button>
</div>
                <hr  style={{boxtext:'4px 2px black'}}/>
              </div>
            </form>
      </div>
    )
  }
}
