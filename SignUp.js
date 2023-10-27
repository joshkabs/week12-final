import './FormStyles.css';
import Modal from './Modal';
import { useState } from 'react';

export default function SignUp() {
  const [errorMassage, setErrorMassage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  //create the object
  const [signupInputs, setSignUpInputs] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  // conditional function to give the error if the phone number less than 10 numbers
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMassage(null);
    const { phoneNumber } = signupInputs;
    if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMassage('Phone Number Format is Incorrect');
    }
    setShowModel(true);
  }

  const btnIsDisabled =
    signupInputs.name == '' ||
    signupInputs.email == '' ||
    signupInputs.phoneNumber == '';
  // make the button disabled until the customer fill out the form
  let btnClasses = '';
  if (btnIsDisabled) {
    btnClasses = 'disabled';
  } else {
    btnClasses = '';
  }
  // create this function that if the customer click in any space, the page will clear the modal that give the submition or error massage.
  function handleDivClick() {
    if (showModel) {
      setShowModel(false);
    }
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: 'column' }}
    >
      <form
        id="signup-form"
        className="flex"
        style={{ flexDirection: 'column' }}
      >
        <h1>Sign Up </h1>
        <hr />

        <label>Name:</label>
        {/* update the value for the name,email and phone number when we use onChange*/}
        <input
          value={signupInputs.name}
          onChange={e => {
            setSignUpInputs({ ...signupInputs, name: event.target.value });
          }}
        />

        <label>Email:</label>
        <input
          value={signupInputs.email}
          onChange={e => {
            setSignUpInputs({ ...signupInputs, email: event.target.value });
          }}
        />
        <label>Phone Number:</label>
        <input
          value={signupInputs.phoneNumber}
          onChange={e => {
            setSignUpInputs({
              ...signupInputs,
              phoneNumber: event.target.value
            });
          }}
        />
        {/* create button that disabled if the customer didn't put any info */}
        <button
          className={btnIsDisabled ? 'disabled' : ''}
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          id="submit-form-button"
        >
          Submit
        </button>
      </form>
      <Modal errorMassage={errorMassage} isVisible={showModel} />
    </div>
  );
}
