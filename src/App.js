import Home from './containers/Home'
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails'
import Register from './containers/Register'
import Login from './containers/Login'
import Cart from './containers/Cart'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product_list" element={<ProductList />} />
        <Route path="/product_details" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
