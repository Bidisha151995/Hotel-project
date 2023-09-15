import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className='container-fluid py-4'>
            <h2 className='text-center text-info textStyle'>HERE WE OFFER</h2><hr />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 py-2 px-3 colContainer">
                        <img src='assets/superdeluxe.jpg' className='img-fluid' />
                        <div className="middle">
                            <div className="serviceText"><Link to='rooms' className='link'>ROOMS</Link></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 py-2 px-3 colContainer">
                        <img src='assets/dining.jpg' className='img-fluid' />
                        <div className="middle">
                            <div className="serviceText"><Link to='dining' className='link'>DINING</Link></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 py-2 px-3 colContainer">
                        <img src='assets/spa.jpg' className='img-fluid' />
                        <div className="middle">
                            <div className="serviceText"><Link to='spa&welness' className='link'>SPA & WELNESS</Link></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 py-2 px-3 colContainer">
                        <img src='assets/gym.jpg' className='img-fluid' />
                        <div className="middle">
                            <div className="serviceText"><Link to='gym' className='link'>GYM</Link></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 py-2 px-3 colContainer">
                        <img src='assets/adventure.jpg' className='img-fluid' />
                        <div className="middle">
                            <div className="serviceText"><Link to='sports' className='link'>SPORTS ACTIVITIES</Link></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 py-2 px-3 colContainer">
                        <img src='assets/weddings.jpg' className='img-fluid' />
                        <div className="middle">
                            <div className="serviceText"><Link to='wedding' className='link'>WEDDING</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services