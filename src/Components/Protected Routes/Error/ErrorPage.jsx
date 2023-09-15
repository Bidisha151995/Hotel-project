import React from 'react'
import './Error.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div className='errorMainDiv'>
            <div className='errorDiv py-5'>
                <h3 className='text-center text-white'>You need to log in first</h3>
                <Link to='/login'>
                    <Button variant="primary" className='mt-3'>Log In</Button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage