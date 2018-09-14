import React from 'react';
import PropTypes from 'prop-types';
import { withSnackBarHandlers } from '../lib';

const ChildWithButton = ({ text, buttonText, handleOpen }) => (
  <div className="buttonContainer">
        Child component with the SnackBar handler
    <button className="submitButton" disabled={!text} onClick={() => handleOpen(text, buttonText)}>
            Show me!
    </button>
  </div>
);

ChildWithButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleOpen: PropTypes.func.isRequired,
};


export default withSnackBarHandlers(ChildWithButton);
