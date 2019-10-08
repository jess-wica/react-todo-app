import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TodoForm extends Component {
    state = { taskInput: '' };
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.taskInput);
    //     this.props.addNewTodo(this.state.taskInput);
    //     this.setState({
    //         taskInput: '',
    //     });
    // }
    render() {
        return (
            <div className="py-3">
                <form onSubmit={this.addNewTodo} >
                    <input
                        type="text"
                        className="rounded"
                        value={this.state.todoTask}
                        onChange={event => this.setState({ taskInput: event.target.value })}
                        placeholder="Enter task..."
                        required />
                    <button type="submit" className="rounded">
                        <FontAwesomeIcon icon="plus" />
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;