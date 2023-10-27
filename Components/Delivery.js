import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './TagButton.css';

export default function Delivery() {
  let URL = 'https://64449cb3914c816083bce3d9.mockapi.io/Cars';

  const [customers, setCustomers] = useState([{}]);

  const [newCustomerName, setNewCustomerName] = useState('');
  const [newCustomerAddress, setNewCustomerAddress] = useState();
  const [newCustomerOrder, setNewCustomerOrder] = useState([]);

  const [updateCustomerName, setUpdateCustomerName] = useState('');
  const [updateCustomerAddress, setupdateCustomerAddress] = useState();
  const [updateOrder, setUpdateOrder] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  function getCustomers() {
    fetch(URL).then(data => data.json()).then(data => setCustomers(data));
  }

  function deleteCustomer(id) {
    fetch(URL + `/${id}`, {
      method: 'Delete'
    }).then(() => getCustomers());
  }

  function postNewCustomer(e) {
    e.preventDefault();

    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newCustomerName,
        order: newCustomerOrder,
        address: newCustomerAddress
      })
    }).then(() => getCustomers());
  }
  function updateCustomer(e, customerObject) {
    e.preventDefault();

    let updatedCustomerObject = {
      ...customerObject,

      name: updateCustomerName,
      order: updateOrder,
      address: updateCustomerAddress
    };

    fetch(`${URL}/${customerObject.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCustomerObject)
    }).then(() => getCustomers());
  }

  return (
    <div className="App-container">
      <form
        style={{
          margin: '80px',

          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%'
        }}
      >
        <label> Name: </label>
        <input onChange={e => setNewCustomerName(e.target.value)} />

        <label> Order: </label>
        <input onChange={e => setNewCustomerOrder(e.target.value)} />

        <label> Address: </label>
        <input onChange={e => setNewCustomerAddress(e.target.value)} />

        <button className="tagbutton" onClick={e => postNewCustomer(e)}>
          Submit
        </button>
      </form>

      {customers.map((customer, index) =>
        <div key={index}>
          <div className="counter">
            <h3>Thank you!{customer.name}</h3>
            <br />
            Your Order is :{customer.order}
            <br />
            <br />
            Your address is :{customer.address}
            <br />
          </div>
          <form className="update-container">
            <h3>Would you like to add or change your order?</h3>
            <br />
            <label> Edit Name: </label>
            <input onChange={e => setUpdateCustomerName(e.target.value)} />
            <br />

            <label> Edit Order: </label>
            <input onChange={e => setUpdateOrder(e.target.value)} />
            <br />

            <label> Edit Address:</label>
            <input onChange={e => setupdateCustomerAddress(e.target.value)} />

            <button
              className="tagbutton"
              onClick={e => updateCustomer(e, customer)}
            >
              Update
            </button>
          </form>{' '}
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
