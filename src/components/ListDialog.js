import React, {Component} from 'react';
import Header from './Header';
import ListItem from './ListItem';
import {Dialog} from 'material-ui';

class ListDialog extends Component {

    state = {tasks: [], newTask: ''}

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
            width: '82%'
        }
    })

    onInputChange = (event) => {
        this.setState({newTask: event.target.value});
    }

    handleAddTask = () => {
        const {tasks, newTask} = this.state;

        if (!newTask) return;

        tasks.push({newTask});

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
                return this.setState({newTask: ''});
            default:
                return;
        }
    }

    handleRemoveTask(index) {
        const {tasks} = this.state;
        const filteredTasks = tasks.filter((event, key) => key !== index);

        this.setState({
            tasks: filteredTasks
        });
    }

    render() {
        const styles = this.getStyles();
        const {open, title} = this.props;
        const {newTask, tasks} = this.state;
        const tasksList = tasks.map((task, key) => (
            <ListItem
                key={key}
                task={task}
                onRemoveButtonClick={this.handleRemoveTask.bind(this, key)}
            />
        ));

        return (
            <div className="listDialog">
                <Dialog
                    title={title}
                    open={open}
                    autoScrollBodyContent={true}
                    style={styles.dialog}
                >
                    <p>
                        {`Things planned for today: ${tasks.length}`}
                    </p>
                    <Header
                        onChange={this.onInputChange}
                        onKeyDown={this.handleKeyDown}
                        onTouchTap={this.handleAddTask}
                        value={newTask}
                    />
                    {tasksList}
                </Dialog>
                <div>MLEKO</div>
            </div>
        );
    }
}

export default ListDialog;
