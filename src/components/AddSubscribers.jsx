import React from 'react'
import Navbar from './Navbar'

const AddSubscribers = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Phone No:</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Address</label>
            <textarea name="" id="" className="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Pincode</label>
            <input type="text" className="form-control" />
                
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">District</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Village Office</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Email id</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <center> <button className="btn btn-success">Add</button></center>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddSubscribers
