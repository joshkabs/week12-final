import { Container } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Button } from 'react-router-dom';
import SideMenu from './SideMenu';
import Header from './Header';

import SignUp from '../SignUp';
import Modal from '../Modal';

export default function Home() {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Header />

      <h2
        style={{
          display: 'flex',
          justifyContent: 'left',
          padding: '40px',
          margin: '20px'
        }}
      >
        <br />
        Best Food For Your Taste!
      </h2>

      <div className="container">
        <img src="bbb.png" width="800" height="400" />
        <div>
          Welcome to Mr.Burger, where taste meets speed! We pride ourselves on
          being a fast food restaurant that doesn't compromise on flavor. From
          the moment you step through our doors, you'll be greeted by the
          mouthwatering aroma of our freshly prepared dishes. Our skilled chefs
          meticulously craft each item on our menu with the finest ingredients,
          ensuring that every bite bursts with deliciousness. Whether you're in
          the mood for juicy burgers, crispy fries, or irresistible milkshakes,
          our extensive selection of delectable options will leave you spoilt
          for choice. We believe that fast food should never mean sacrificing
          taste, and we invite you to experience the perfect harmony of quick
          service and unforgettable flavors.
        </div>{' '}
        <SideMenu />{' '}
      </div>
    </div>
  );
}
