import { features } from 'process';
import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrderDetails() {
  let URL = 'https://64449cb3914c816083bce3d9.mockapi.io/Animal';
  const [customers, setCustomers] = useState([{}]);
  const [newCustomerName, setNewCustomerName] = useState('');
  const [newCustomerOrder, setNewCustomerOrder] = useState([]);

  const [updateCustomerName, setUpdateCustomerName] = useState('');
  const [updateOrder, setUpdateOrder] = useState([]);
  // runs the callback function after the initial render and after every re-render of the component
  useEffect(() => {
    getCustomers();
  }, []);
  // Create Customer
  function getCustomers() {
    fetch(URL).then(data => data.json()).then(data => setCustomers(data));
  }
  // set function to be able to delete the customer and using id to be specific
  function deleteCustomer(id) {
    fetch(URL + `/${id}`, {
      method: 'Delete'
    }).then(() => getCustomers());
  }
  // this function for read so we can see the customers and their orders
  function postNewCustomer(e) {
    e.preventDefault();

    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newCustomerName,
        order: newCustomerOrder
      })
    }).then(() => getCustomers());
  }
  // set the update function by grab the inputs that the costomer filled it out and also here we need to use the ID
  function updateCustomer(e, customerObject) {
    e.preventDefault();

    let updatedCustomerObject = {
      ...customerObject,

      name: updateCustomerName,
      order: updateOrder
    };
    fetch(`${URL}/${customerObject.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCustomerObject)
    }).then(() => getCustomers());
  }
  // form that give a chance for customer to fill it out and with onChange we could change the value
  return (
    <div className="App-container">
      <form style={{ margin: '60px' }}>
        <label> Name: </label>
        <input onChange={e => setNewCustomerName(e.target.value)} />

        <label> Order: </label>
        <input onChange={e => setNewCustomerOrder(e.target.value)} />
        {/* use onClick so every time the customer hit submit we will get the new value */}
        <button className="tagbutton" onClick={e => postNewCustomer(e)}>
          Submit
        </button>
      </form>
      <hr />

      {customers.map((customer, index) =>
        <div key={index}>
          <div className="container" style={{ margin: '30px' }}>
            <h3> Thank you {customer.name}!</h3>
            <br />
            Your Order is: {customer.order}
            <br />
          </div>
          <form className="update-container">
            <h4>Do you like to add or change your order?</h4>
            <label> Edit Name: </label>

            <input onChange={e => setUpdateCustomerName(e.target.value)} />
            <br />

            <label> Edit Order: </label>
            <input onChange={e => setUpdateOrder(e.target.value)} />

            <button
              className="tagbutton"
              onClick={e => updateCustomer(e, customer)}
            >
              Update
            </button>
          </form>
          {/* create the delete button */}
          <button
            style={{
              background: '#FF6347',
              marginLeft: '400px',

              height: '40px',
              borderRadius: '30px',
              width: '100px'
            }}
            onClick={() => deleteCustomer(customer.id)}
          >
            Cancel
          </button>
          {/* create the done button and when we hit it, it take us to the home page */}
          <Link to="/">
            <button
              style={{
                background: '#FF6347',
                marginLeft: '400px',
                height: '40px',
                borderRadius: '30px',
                width: '100px'
              }}
            >
              Done
            </button>
          </Link>{' '}
        </div>
      )}
    </div>
  );
}
