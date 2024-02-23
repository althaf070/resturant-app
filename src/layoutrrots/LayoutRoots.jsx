
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import HomePage from '../pages/home/HomePage'
import Dishes from '../pages/dishes/Dishes'
import Booking from '../pages/booking/Booking'
import About from '../components/about/About'
import NotFound from '../pages/notfound/NotFound'

const LayoutRoots = () => {
  return (
   <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/dishes" element={<Dishes />}/>
        <Route path="/services" element={<Booking />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/*" element={<NotFound />}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default LayoutRoots