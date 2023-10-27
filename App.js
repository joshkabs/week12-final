import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Menu from './Components/Menu.js';
import OrderNow from './Components/OrderNow.js';
import About from './Components/About.js';
import Home from './Components/Home.js';
import Delivery from './Components/Delivery.js';

import SideMenu from './Components/SideMenu.js';
import PickUp from './Components/PickUp.js';
import Header from './Components/Header.js';
import Logo from './Components/Logo.js';
import SignUp from './SignUp.js';
import Modal from './Modal.js';
import './FormStyles.css';
export default function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <div>
            <Logo />
          </div>
          <Link to="/">
            {' '}<Button
              style={{
                color: 'white',
                margin: '5px'
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/OrderNow">
            <Button style={{ color: 'white', margin: '5px' }}>Order Now</Button>
          </Link>
          <Link to="/about">
            <Button style={{ color: 'white', margin: '5px' }}>About</Button>
          </Link>
          <Link to="/Menu">
            <Button style={{ color: 'white', margin: '5px' }}>Menu</Button>
          </Link>

          <Link to="/SignUp">
            <Button style={{ color: 'white', margin: '5px' }}>SignUp</Button>
          </Link>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/OrderNow">
            <OrderNow />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/PickUp">
            <PickUp />
          </Route>

          <Route path="/Delivery">
            <Delivery />
          </Route>

          <Route path="/SignUp">
            <SignUp />
          </Route>

          <Route path="/Modal">
            <Modal />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
