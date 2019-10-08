import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TodoForm extends Component {
    taskInput = React.createRef();
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.taskInput.current.value)
    }
    render() {
        return (
            <div className="py-3">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" className="rounded" placeholder="Enter task..." ref={this.taskInput} required />
                    <button type="submit" className="rounded">
                        <FontAwesomeIcon icon="plus" />
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;