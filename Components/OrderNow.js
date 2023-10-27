import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@mui/material';

export default function OrderNow() {
  return (
    <div
      style={{
        background: 'rgba(255, 0, 0, 0.8)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        textAlign: 'center',
        margin: '50px',
        height: '600px',
        listStyletype: 'none'
      }}
    >
      {' '}<div
        style={{
          height: '200px',
          width: '600px',
          margin: '30px ',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h1 className="text-center mb-4 ms-4">
          what kind of order can we get started for you?
        </h1>{' '}
        {' '}
      </div>
      <Link to="/PickUp" style={{ textDecoration: 'none' }}>
        <button
          style={{
            margin: '20px',
            padding: '2px',
            width: '300px',
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '20px',
            boxShadow: '0px 5px 7px rgba(0,0,0,0.5)',
            cursor: 'pointer'
          }}
        >
          <h1>Order Pickup</h1>
          <img
            src="th.jpeg"
            style={{
              height: '30px',
              width: '60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          />
        </button>
      </Link>{' '}
      <Link to="/Delivery" style={{ textDecoration: 'none' }}>
        <div>
          <button
            style={{
              margin: '20px',
              padding: '2px',
              width: '300px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '10px',

              boxShadow: '0px 5px 7px rgba(0,0,0,0.5)',
              cursor: 'pointer'
            }}
          >
            <h1>Order Delivery </h1>
            <img
              src="de.jpeg"
              style={{
                height: '30px',
                width: '60px'
              }}
            />
          </button>
        </div>
      </Link>
    </div>
  );
}
