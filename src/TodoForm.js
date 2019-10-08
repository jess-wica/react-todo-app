import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Enter task..." />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default TodoForm;