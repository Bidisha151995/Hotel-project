import React from 'react'
import './Home.css'
import About from '../About/About'
import Services from '../Services/Services'
const Home = () => {
  return (
    <div>
      <div className='mainDiv'>
        <div className='homeDiv'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
          </div>
        </div>
      </div>
      <About/>
      <Services/>
    </div>
  )
}

export default Home