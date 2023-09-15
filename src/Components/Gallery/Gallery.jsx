import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Gallery.css'
const Gallery = () => {
    return (
        <div>
            <h1 className='text-info text-center mt-4 mb-5'>About Us</h1>
            <hr className='text-primary' />
            <div className='container-fluid py-4'>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6} className='mt-4 mb-4'>
                        <img src='../../../../assets/gallery2.jpg' className='img-fluid' />
                    </Col>
                    <Col sm={12} md={4} lg={6} xl={6} className='mt-4'>
                        <div className='container'>
                            <h3 className='galleryText text-left mx-5'>We are a self-contained commercial
                                establishment that tries to provide most of a vacationer's
                                wants, such as food, drink, swimming, lodging, sports, entertainment, and shopping,
                                on the premises.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deleniti suscipit ipsa dignissimos enim accusantium nobis modi tempora
                                necessitatibus, illo atque velit consectetur deserunt autem sequi
                                perferendis ut dicta impedit rerum, animi esse, tempore architecto explicabo
                                exercitationem aperiam. Ad, unde odio ullam culpa reprehenderit molestias
                                rerum eius eaque numquam corrupti sapiente quam temporibus pariatur ipsa
                                minus non cumque tempora soluta!Ad, unde odio ullam culpa reprehenderit molestias
                                rerum eius eaque numquam corrupti sapiente quam temporibus pariatur ipsa
                                minus non cumque tempora soluta!Ad, unde odio ullam culpa reprehenderit molestias
                                rerum eius eaque numquam corrupti sapiente quam temporibus pariatur ipsa
                                minus non cumque tempora soluta!</h3>
                        </div>
                    </Col>
                </Row>
                <div className='container-fluid dineMainDiv px-5'>
                    <div className='container px-5 py-5 text-white'>
                        <h2 className='text-center mt-5 dine_head py-5'>Unforgettable Dining Experience</h2>
                    </div>
                </div>
                <div className='container px-5 mx-5'>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6} className='mt-4'>
                            <Row>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <img src='../../../../assets/wellness.jpg' className='img-fluid' />
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <img src='../../../../assets/gallery13.jpg' className='img-fluid py-5 mt-5' />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6} className='mt-5 py-5 px-5'>
                            <h2 className='text-center pt-5 spaText'>Spa & Wellness</h2>
                            <hr />
                            <p className='galleryText text-left px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Temporibus quis corrupti iste itaque ut culpa quam ullam
                                facere excepturi! Eveniet culpa maiores mollitia hic
                                perspiciatis asperiores numquam sit aspernatur voluptatum.Eveniet culpa maiores mollitia hic
                                perspiciatis asperiores numquam sit aspernatur voluptatum.</p>
                        </Col>
                    </Row>
                </div>
                <div className='container-fluid wedMainDiv'>
                    <div className='container px-5'>
                        <h2 className='text-center mt-5 wed_head py-5'>Celebrate Your Special Day At Paradise</h2>
                    </div>
                </div>
                <div className='container-fluid px-5 mx-5'>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6} className='mt-4'>
                            <Row>
                                <Col sm={6} md={6} lg={6} xl={6} className='mt-4'>
                                    <h2 className='text-center px-5 text-info'>Adventure Sports</h2>
                                    <hr/>
                                    <p className='galleryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Totam labore laborum veritatis pariatur perferendis enim,
                                        voluptas magnam dolorum quas facilis officiis exercitationem obcaecati
                                        consectetur excepturi provident rem! Dolor, quaerat? Illum.</p>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6} className='mt-4'>
                                    <img src='../../../../assets/gallery14.jpg' className='img-fluid' />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6} className='mt-4'>
                            <img src='../../../../assets/gallery10.jpg' className='img-fluid' />
                        </Col>
                    </Row>
                </div>
                <h2 className='text-center mt-4 text-info'>Explore Our Gallery</h2>
                <hr/>
                <Row>
                    <Col sm={6} md={3} lg={3} xl={3} className='mt-4'>
                        <img src='../../../../assets/gallery4.jpg' className='img-fluid' />
                    </Col>
                    <Col sm={6} md={3} lg={3} xl={3} className='mt-4'>
                        <img src='../../../../assets/gallery5.jpg' className='img-fluid' />
                    </Col>
                    <Col sm={6} md={3} lg={3} xl={3} className='mt-4'>
                        <img src='../../../../assets/gallery6.jpg' className='img-fluid' />
                    </Col>
                    <Col sm={6} md={3} lg={3} xl={3} className='mt-4'>
                        <img src='../../../../assets/gallery7.jpg' className='img-fluid' />
                    </Col>
                    <Col sm={6} md={3} lg={3} xl={3} className='mt-4'>
                        <img src='../../../../assets/gallery8.jpg' className='img-fluid' />
                    </Col>
                    <Col sm={6} md={3} lg={3} xl={3} className='mt-4'>
                        <img src='../../../../assets/gallery9.jpg' className='img-fluid' />
                    </Col>
                    
                    <Col sm={6} md={3} lg={3} xl={3} className='mt-4'>
                        <img src='../../../../assets/gallery11.jpg' className='img-fluid' />
                    </Col>
                    <Col sm={6} md={3} lg={3} xl={3} className='mt-4'>
                        <img src='../../../../assets/gallery12.jpg' className='img-fluid' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Gallery