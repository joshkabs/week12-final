import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div
        style={{
          background: '#FFFACD',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          textAlign: 'center',
          margin: '50px',
          height: '500px'
        }}
      >
        <h3>Phone</h3>
        <button> +1(720)459-8650</button>
        <div>
          <h3>Website</h3>
          <Link to="/">
            <button> Mr.burger.com</button>
          </Link>
        </div>
        <div>
          <h3>Address</h3>
          <button>Mr.Burger near Denver, CO 80210</button>{' '}
        </div>
        <div>
          <h2
            style={{
              margin: '50px'
            }}
          >
            Hours :<br />{' '}
            <h4>
              5:00 AM - 12:00 AM<br />
              Everyday
            </h4>
          </h2>
        </div>
        <div
          style={{
            margin: '80px'
          }}
        >
          <a href="http://www.facebook.com">
            {' '}<img style={{ height: '30px', width: '45px' }} src="fb.jpeg" />
          </a>{' '}
          <a href="http://www.instagram.com">
            <img style={{ height: '30px', width: '35px' }} src="inst.png" />
          </a>
          <a href="http://www.tweeter.com">
            <img style={{ height: '30px', width: '35px' }} src="twt.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
