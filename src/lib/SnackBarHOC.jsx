import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';


const DEFAULT_STATE = {
  show: false,
  buttonText: 'OK',
  displayText: '',
  timeOut: 2000,
};

const SnackBarContext = React.createContext(DEFAULT_STATE);

export const withSnackBarHandlers = (WrappedComponent) => {
  const WrapSnackBarHandler = props => (
    <SnackBarContext.Consumer>
      {({
            handleClose, handleOpen,
          }) =>
            (<WrappedComponent
              handleClose={handleClose}
              handleOpen={handleOpen}
              {...props}
            />)}
    </SnackBarContext.Consumer>
  );
  return WrapSnackBarHandler;
};


export const withSnackBarContext = (WrappedComponent) => {
  const WrapSnackBarContext = props => (
    <SnackBarContext.Consumer>
      {({
            show, handleClose, displayText, buttonText, handleOpen,
        }) => {
            const snackBarprops = {
            show, handleClose, displayText, buttonText, handleOpen,
            };
            return <WrappedComponent {...snackBarprops} {...props} />;
            }}
    </SnackBarContext.Consumer>
  );
  return WrapSnackBarContext;
};

export class SnackBarProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      {},
      DEFAULT_STATE,
    );
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(displayText, buttonText) {
    this.setState({
      show: true,
      displayText,
      buttonText,
    });
    setTimeout(() => {
      this.setState({ show: false });
    }, this.state.timeOut);
  }

  handleClose() {
    this.setState({
      show: false,
      buttonText: 'OK',
      displayText: '',
    });
  }

  render() {
    return (
      <SnackBarContext.Provider
        value={{
          ...this.state,
          handleOpen: this.handleOpen,
          handleClose: this.handleClose,
        }}
      >
        {
          this.props.children //eslint-disable-line
        }
      </SnackBarContext.Provider>
    );
  }
}
