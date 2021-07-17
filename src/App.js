import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';
function App() {
  const [product,setProduct]=useState({
    name:"booking badminton slot",
    price:10,
    productBy:"cumulations"
  })
  const makePayment =token=>{
    const body = {token,
    product
  }
  const headers ={
    "Content-Type":"application/json"
  }
  return fetch(`http://localhost:1337/payment`,{
    method:"POST",
    headers,
    body :JSON.stringify(body)
  }).then(response =>{
    console.log("response",response)
  }).catch(err=>{console.log(err)})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          booking slot
        </a>
        <StripeCheckout
        stripeKey = "pk_test_51JDYgISDbOAe3XQ7BfNbhOCYuYq8OOp9Kwy7RhIIZmJ2eTjyvutR80uUycTNYyWf0CMvw8StfeE6lt3EsuR34spe00L8eRUfVK"
        token = {makePayment}
        name = "Book slot" >
        <button className="btn-large pink">book slot at {product.price}$</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;
