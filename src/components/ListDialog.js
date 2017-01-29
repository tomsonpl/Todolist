import React, { Component } from 'react';
import ListItem from './ListItem'
import { Dialog, RaisedButton, TextField } from 'material-ui';

class ListDialog extends Component {

  state = { tasks: [], newTask: '' }

  getStyles = () => ({
    dialog: {
      textAlign: 'center'
    },
    label: {
      color: '#000',
      textAlign: 'center'
    },
    input: {
      paddingTop: 30,
      fontSize: 20,
      width:"82%"
    }
  })
 
  onInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  }

  handleAddTask = () => {
    const { tasks, newTask } = this.state;

    if(!newTask) return;

    tasks.push({ newTask });

    this.setState({
      tasks,
      newTask: ''
    });
  }

  handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
          return this.handleAddTask();
      case 'Escape':
          return this.setState({ newTask: ''});
      default:
        return;  
    }
  }

  handleRemoveTask(index) {
    const { tasks } = this.state;
    const filteredTasks = tasks.filter((event, key) => {
        return key !== index;
      })

    this.setState({
      tasks: filteredTasks
    });
  }

  renderTasks = () => {
    const { tasks } = this.state;
    const tasksToRender = tasks.map((task, key) => (
      <ListItem
        key={key}
        task={task}
        onRemoveButtonClick={this.handleRemoveTask.bind(this, key)}
      />
    ));

    return tasksToRender;
  };

  render() {
    const styles = this.getStyles();
    const { open, title } = this.props;
    const { newTask, tasks } = this.state;

    return (
      <div>
        <Dialog
          title={title}
          open={open}
          autoScrollBodyContent={true}
          style={styles.dialog}
        >
          {`Things planned for today: ${tasks.length}`}
          <TextField 
            style={styles.input}
            id="Task Name"
            inputStyle={styles.label}
            value={newTask}
            onChange={this.onInputChange}
            onKeyDown={this.handleKeyDown}
            placeholder="A new task for today..."
          />
          <RaisedButton
            primary
            label="Add"
            onTouchTap={this.handleAddTask}
          />
          {this.renderTasks()}
        </Dialog>
      </div>
    );
  };
}

export default ListDialog;
