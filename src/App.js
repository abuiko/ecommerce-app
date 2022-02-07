import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import Cart from './containers/Cart'
import Favorites from './containers/Favorites'

import { Routes, Route } from 'react-router-dom'
import AllProducts from './containers/AllProducts';
import AllProductDetails from './containers/AllProductDetails';
import styled from 'styled-components'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Container = styled.div``

function App() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<AllProductDetails />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
