import React from 'react'
import Navbar from './Navbar'

const ViewSubscribers = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Subscriber Name</th>
      <th scope="col">Phone </th>
      <th scope="col">Newspaper Subscribed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Thomas</td>
      <td>9184676535</td>
      <td>The Times</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob James</td>
      <td>9188086758</td>
      <td>Daily Mail</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry Smith</td>
      <td>9184746598</td>
      <td>The Times</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Madhu M</td>
      <td>9184680048</td>
      <td>The Daily Telegraph</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Mathew Joseph</td>
      <td>9759304657</td>
      <td>The Times</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>George Smith</td>
      <td>9056478365</td>
      <td>The Times</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Larry Smith</td>
      <td>9184746598</td>
      <td>The Times</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Lara s</td>
      <td>9187966456</td>
      <td>Daily Mail</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Peter M</td>
      <td>9100807690</td>
      <td>The Times</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Kezia H</td>
      <td>9177880090</td>
      <td>The Times</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewSubscribers
