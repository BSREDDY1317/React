
import './App.css';
import Card from './Card';
import Carousel from './Carousel';
import Navebar from './Navebar';
import data from './Data';
import Cart from './Cart';
import cloth from './cloth'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
   const [cartData,setCartData] = useState([]);

   const handleCartData = (product) => {
    setCartData((cartData) => [...cartData, {data:product, quantity: 1 }]);
   }
   
  return (
    <div>
      <Router>
      <Navebar/>
      <Carousel/>
        <Routes>
          <Route exact path='/' element={ <Card data = {data} cloth = {cloth} handleCartData={handleCartData} />} />      
          <Route exact path='/Cart' element={<Cart data={cartData}/>} />   
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
