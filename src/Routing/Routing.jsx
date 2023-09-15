import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import SignUp from '../Components/Users/SignUp/SignUp'
import LogIn from '../Components/Users/LogIn/LogIn'
import Services from '../Components/Services/Services'
// import Booking from '../Components/Booking/Booking'
import PNF from '../Components/PageNotFound/PNF'
import Receipt from '../Components/Receipt/Receipt'
import HotelRoom from '../Components/HotelRoom/HotelRoom'
import About from '../Components/About/About'
import Dining from '../Components/Dining/Dining'
import Reviews from '../Components/Reviews/Reviews'
import ReviewForm from '../Components/Reviews/ReviewForm'
import AllReviews from '../Components/Reviews/AllReviews'
import ProtectedRoutes from '../Components/Protected Routes/ProtectedRoutes'
import ErrorPage from '../Components/Protected Routes/Error/ErrorPage'
import { Spinner } from 'react-bootstrap'
import Gallery from '../Components/Gallery/Gallery'
import Profile from '../Components/Users/Profile/Profile'
const Booking = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../Components/Booking/Booking')), 1000)
  });
});
const Routing = () => {
  return (
    <>  
      <Router>
        <Header />
        <Suspense fallback={
          <div style={{ 'padding': '150px' }}>
            <center>
              <Spinner animation='border' variant='info' />
            </center>
          </div>
        }>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />
          <Route path='profile' element={<Profile/>}/>
          <Route path='signup/login' element={<LogIn />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='services/rooms' element={<HotelRoom />} />
          <Route path='rooms' element={<HotelRoom />} />
          <Route path='services/rooms/booking/receipt/:book_mail' element={<Receipt />} />
          <Route path='rooms/booking/receipt/:book_mail' element={<Receipt />} />
          <Route path='booking/receipt/:book_mail' element={<Receipt />} />
          <Route path='dining' element={<Dining />} />
          <Route path='services/dining' element={<Dining />} />
          <Route path='allreviews' element={<AllReviews />} />
          <Route path='login/allreviews' element={<AllReviews />} />
          <Route path='reviews/:uEmail' element={<Reviews />} />
          
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='about/gallery' element={<Gallery/>}/>

          {/*Protected Route components  */}
          <Route element={<ProtectedRoutes />}> 
          <Route path='services/rooms/booking' element={<Booking />} />
          <Route path='rooms/booking' element={<Booking />} />
          <Route path='booking' element={<Booking />} />
          <Route path='reviewform' element={<ReviewForm />} />
          <Route path='login/reviewform' element={<ReviewForm />} />
          </Route>
          <Route path='errorPage' element={<ErrorPage />} />
          <Route path='*' element={<PNF />} />
        </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  )
}

export default Routing