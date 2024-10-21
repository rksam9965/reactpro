import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/pages/Home/home';
import Cart from './pages/pages/Cart/cart';
import PlaceOrder from './pages/pages/Cart/cart';


const App = () => {
  return (
      <div className='app'>
        {/* <Home/> */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          {/* <Route path='imman' element={<Navbar />}/> */}
        </Routes>
      </div>
  );
}

export default App;
