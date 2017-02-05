import React, { Component } from 'react';
import ListDialog from './components/ListDialog';

class App extends Component {
  render() {
    return (
      <ListDialog
        title={'ToDo List'}
        open={true}
      />
    );
  }
}

export default App;
