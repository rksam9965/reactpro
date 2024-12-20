import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/pages/Home/home';
import Cart from './pages/pages/Cart/Cart';
import PlaceOrder from './pages/pages/Cart/Cart';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <div className='app'>
        {/* <Home/> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
