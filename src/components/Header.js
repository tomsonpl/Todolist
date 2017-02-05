import React from 'react';
import { RaisedButton, TextField } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

// The line below was added here in order to fix tests,
// Normally I would have put this in index.js 
injectTapEventPlugin();

const ListItem = ({ value, onKeyDown, onChange, onTouchTap }) => {
  const styles = {
    label: {
      color: '#000',
      textAlign: 'center'
    },
    input: {
      paddingTop: 30,
      fontSize: 20,
      width: '82%'
    }
  };

  return (
    <div className="header">
      <TextField
        style={styles.input}
        id="Task Name"
        inputStyle={styles.label}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="A new task for today..."
      />
      <RaisedButton
        className="addButton"
        primary={true}
        label="Add"
        onTouchTap={onTouchTap}
      />
    </div>
  );
};

export default ListItem;
