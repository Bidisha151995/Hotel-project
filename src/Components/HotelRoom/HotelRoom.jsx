import React from 'react'
import { Link } from 'react-router-dom'
import './HotelRoom.css'
const HotelRoom = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row mt-4 px-5 py-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12 px-5 py-5 text-center'>
                        <h1 className='room_head'>OCEAN VIEW ROOM</h1>
                        <p className='room_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore
                            pariatur molestiae exercitationem corrupti ipsa quisquam illo quaerat
                            dignissimos velit, saepe maiores adipisci odio magni aliquam odit,
                            explicabo deserunt quam.</p> 
                            <h4>For 2 or 3 persons</h4>
                        <h4>350$/Night</h4>       
                        <Link to='booking'>
                            <button type="button" class="btn btn-lg btn-outline-warning px-3 py-2 mt-4">BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img src='/assets/villa.jpg' className='img-fluid rounded' />
                    </div>
                </div>
            </div>
            <div className='container-fluid backImg'>
                <div className='row mt-4 px-5 py-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12 px-5 py-5 text-center'>
                        <img src='/assets/deluxe.jpg' className='img-fluid rounded' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 px-5 py-5 text-center'>
                        <h1 className='room_head'>BEACH VILLA</h1>
                        <p className='room_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore
                            pariatur molestiae exercitationem corrupti ipsa quisquam illo quaerat
                            dignissimos velit, saepe maiores adipisci odio magni aliquam odit,
                            explicabo deserunt quam.</p>
                            <h4>For 2 or 3 persons</h4>
                        <h4>250$/Night</h4>
                        <Link to='booking'>
                            <button type="button" class="btn btn-lg btn-outline-warning px-3 py-2 mt-4">BOOK NOW</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row mt-4 px-5 py-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12 px-5 py-5 text-center'>
                        <h1 className='room_head'>ROYAL FAMILY SUITE</h1>
                        <p className='room_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore
                            pariatur molestiae exercitationem corrupti ipsa quisquam illo quaerat
                            dignissimos velit, saepe maiores adipisci odio magni aliquam odit,
                            explicabo deserunt quam.</p>
                        <h4>For 2 or 3 persons</h4>
                        <h4>450$/Night</h4>
                        <Link to='booking'>
                            <button type="button" class="btn btn-lg btn-outline-warning px-3 py-2 mt-4">BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img src='/assets/superdeluxe.jpg' className='img-fluid rounded' />
                    </div>
                </div>
            </div>
            <div className='container-fluid backImg'>
                <div className='row mt-4 px-5 py-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12 px-5 py-5 text-center'>
                        <img src='/assets/honeymoon.jpg' className='img-fluid rounded' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 px-5 py-5 text-center'>
                        <h1 className='room_head'>HONEYMOON SUITE</h1>
                        <p className='room_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore
                            pariatur molestiae exercitationem corrupti ipsa quisquam illo quaerat
                            dignissimos velit, saepe maiores adipisci odio magni aliquam odit,
                            explicabo deserunt quam.</p>
                        <h4>For 2 persons</h4>
                        <h4>250$/Night</h4>
                        <Link to='booking'>
                            <button type="button" class="btn btn-lg btn-outline-warning px-3 py-2 mt-4">BOOK NOW</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelRoom