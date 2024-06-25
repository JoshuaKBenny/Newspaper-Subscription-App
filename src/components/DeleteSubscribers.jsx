import React from 'react'
import Navbar from './Navbar'

const DeleteSubscribers = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <center>  <buttom className="btn btn-danger">Delete</buttom> </center>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteSubscribers
