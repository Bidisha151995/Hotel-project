import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './About.css';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className='aboutDiv'>
    <div className='container-fluid px-5 py-5'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12 py-1 px-5'>
            <h2 className='text-center text-info mb-4 textStyle'>WELCOME TO PARADISE</h2>
            <hr/>
            <p className='aboutText mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Deleniti suscipit ipsa dignissimos enim accusantium nobis modi tempora 
              necessitatibus, illo atque velit consectetur deserunt autem sequi 
              perferendis ut dicta impedit rerum, animi esse, tempore architecto explicabo 
              exercitationem aperiam. Ad, unde odio ullam culpa reprehenderit molestias 
              rerum eius eaque numquam corrupti sapiente quam temporibus pariatur ipsa 
              minus non cumque tempora soluta! Corrupti rem nam libero dolores deserunt,
              veniam incidunt adipisci natus consectetur.</p>
             <Link to='./gallery' className='abtBtnLink'>
              <button type="button" className="btn btn-outline-info py-3 abt_btn">EXPLORE MORE</button>
              </Link>
             
              </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>          
            <Carousel>
              <Carousel.Item>
                <img className="w-100 rounded" src="assets/about1.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100 rounded" src="assets/about2.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100 rounded" src="assets/about3.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100 rounded" src="assets/about4.jpg" alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About