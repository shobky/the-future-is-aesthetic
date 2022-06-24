import React from "react";
import "./Confirmation.css";
import PropTypes from 'prop-types';

const Confirmation = (inputs) => {

  // console.log(inputs.inputsstName);

  return (
    <div className="comfirmation">
      <a href="./shop" className="redirect-to-shoap">continue shopping</a>
      <div className="msg-container">
        <h1 className="msg first-msg">Almost Finished..</h1>
        <p className="msg sub-msg">your order have been deliverd, to get it confirmed please follow instructions in the email we have sent to you.</p>
        <br  />
        <p className="msg footer-msg">{'thank you ' + inputs.inputs.firstName + ', for usuing our website'} </p>
      </div>
    </div>
  );
};

export default Confirmation;
Confirmation.propTypes = {
  inputs: PropTypes.object
};
