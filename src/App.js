import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';

import {ToastContainer, toast} from "react-toastify"
import {Container, Col, Row} from 'reactstrap'

import BuyPage from './Components/BuyPage'
import Cart from './Components/Cart'

function App() {

  const [cartItem, setCartItem] = useState([])

  const AddInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id;
    });

    if(isAlreadyAdded !== -1) {
      toast("Already added in the cart!", { type: "error"});
      return;
    }

    setCartItem([...cartItem, item]);
    toast("Added to cart!", { type: "info"})
  }

  const BuyNow = () => {
    setCartItem([]);

    toast("Purchase Completed 🎉", {type: "success"})  
  }

  const RemoveItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
    toast("Removed from cart!", {type: "warning"})
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage AddInCart={AddInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={RemoveItem} buyNow={BuyNow}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
