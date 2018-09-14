# Simple SnackBar

It's a simple snack bar component built using React's Context API.

## Installation

```npm install simple-snackbar```

## Usage

### Using SnackBarProvider

> In your App.js

```
import React, { Component } from 'react';
import { SnackBarProvider, SnackBar } from 'simple-snackbar';

class App extends Component {
  render() {
    return (
      <SnackBarProvider>
         <div className="App">
            ...
          </div>
        <SnackBar />
     </SnackBarProvider>
     );
   }
}
export default App;

```


### Using SnackBar

> Somewhere in your application:

```
  import { SnackBar } from 'simple-snackbart';

  ....

  <SnackBar
      enableButton
      primary
    />

    ....

```

props that can be passed down to Snackbar:

| name  | type |
| ------| ----- |
| enableButton  | bool  |
| primary  | bool  |


### Using the withSnackBarHandlers HOC:

```

  import { withSnackBarHandlers } from 'simple-snackbart';
    
    const SnackBarControl = ({ handleOpen }) => (
      <button onClick={()   => handleOpen('Hello!!', 'OK!')}>
        Show me!
      </button>
    );

    export default withSnackBarConsumer(SnackBarControl);

```

props provided by withSnackBarHandlers:

| name  | params |
| ------| ----- |
| handleOpen  | displayText, buttonText  |
| handleClose  | NA  |


*Demo Site*: https://akshay5995.github.io/simple-snackbar/

*Follow me on*:
  Medium: https://medium.com/@akshay5995

