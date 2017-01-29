import React from 'react';
import { Checkbox, FlatButton } from 'material-ui';

const ListItem = ({ task, onRemoveButtonClick }) => {
  const styles = {
    checkBox: {
      //Fix material-ui strange behaviour
      right: 0
    },
    listItem: {
      display: 'flex',
      width: '85%',
      paddingTop: 20,
      fontSize: 25,
      justifyContent: 'flex-start'
    },
    removeButton: {
      justifyContent: 'flex-end'
    }
  }

  return (
    <li
      style={styles.listItem}
    > 
      <Checkbox
        iconStyle={styles.checkBox}
        label={task.newTask}
      />
      <FlatButton
        secondary
        style={styles.removeButton}
        label="Delete"
        onTouchTap={onRemoveButtonClick}
      />
    </li>
  );
};

export default ListItem;
