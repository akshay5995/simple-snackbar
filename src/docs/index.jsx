import React from 'react';
import { render } from 'react-dom';
import Form from './Form';
import { SnackBarProvider } from '../lib';
import './styles.css';

const App = () => (
  <SnackBarProvider>
    <Form />
  </SnackBarProvider>
);

render(<App />, document.getElementById('app'));
