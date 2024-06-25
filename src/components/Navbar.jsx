import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Newspaper Subscription App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Add Subscriber</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ViewSubscriber">View Subscribers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/SearchSubscriber">Search Subscriber</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/DeleteSubscriber">Delete Subscriber</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
