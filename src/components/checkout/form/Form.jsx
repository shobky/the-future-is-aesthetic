import React, { useState } from "react";
import "./Form.css";
import Confirmation from "../confirmation/Confirmation";

const CheckoutForm = () => {
  var [inputs, setInputs] = useState({});
  const [confirm, setConfirm] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(inputs.firstName);
    setConfirm(!confirm);
  };

  return (
    <form className="checkout__form" onSubmit={submitHandle}>
      <div className="Confirmation">
        {confirm && 
        <Confirmation inputs={inputs} />}
        </div>
      <h4 className="checkout__subheading">Customer information</h4>
      <br />

      <div className="form__container">
        <label className="checkout__label" htmlFor="firstName">
          First name
        </label>
        <input
          required="true"
          className="checkout__input"
          placeholder=" Enter first name"
          key="firstName"
          name="firstName"
          onChange={({ target }) =>
            setInputs((state) => ({ ...state, firstName: target.value }))
          }
          value={inputs.firstName}
        />
        <br />

        <label className="checkout__label" htmlFor="lastName">
          Last name
        </label>
        <input
          required="true"
          placeholder=" Enter last name"
          className="checkout__input"
          key="lastName"
          name="lastName"
          onChange={({ target }) =>
            setInputs((state) => ({ ...state, lastName: target.value }))
          }
          value={inputs.lastName}
        />
        <br />

        <label className="checkout__label" htmlFor="email">
          Email
        </label>
        <input
          required="true"
          placeholder=" Enter email"
          className="checkout__input"
          key="email"
          name="email"
          onChange={({ target }) =>
            setInputs((state) => ({ ...state, email: target.value }))
          }
          value={inputs.email}
        />
        <br />

        <label className="checkout__label" htmlFor="number">
          phone number
        </label>
        <input
          required="true"
          placeholder=" Enter phone number"
          className="checkout__input"
          key="number"
          name="number"
          onChange={({ target }) =>
            setInputs((state) => ({ ...state, number: target.value }))
          }
          value={inputs.number}
        />

        <button
          className="checkout__btn-confirm"
          type="submit"
        >
          Confirm order
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;

