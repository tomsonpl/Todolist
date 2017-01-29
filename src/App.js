import React, { Component } from 'react';
import ListDialog from './components/ListDialog';

class App extends Component {

  render() {
    return (
      <div>
        <ListDialog
          title={"ToDo List"}
          open={true} 
        />
      </div>
    );
  }
}

export default App;
