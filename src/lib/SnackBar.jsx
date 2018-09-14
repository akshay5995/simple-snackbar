import React from 'react';
import PropTypes from 'prop-types';
import { withSnackBarContext } from './SnackBarHOC';
import './snackbar.css';

const SnackBar = ({
  show, handleClose, displayText, buttonText, enableButton, primary,
}) => (
  <div
    className="SnackBarHolder"
  >
    {
        show
            && (
            <div className={primary ? 'SnackBarPrimary' : 'SnackBarSecondary'} >
              <span>{displayText}</span>
              {
                enableButton
                &&
                <button
                  onClick={() => handleClose()}
                >
                  {buttonText}
                </button>
              }
            </div>
            )
        }
  </div>
);

SnackBar.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  displayText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  enableButton: PropTypes.bool,
  primary: PropTypes.bool,
};

SnackBar.defaultProps = {
  enableButton: true,
  primary: true,
};

export default withSnackBarContext(SnackBar);

