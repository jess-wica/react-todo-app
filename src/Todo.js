import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const todoTask = this.props;
        return (
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked="" />
                <label>
                    {todoTask.task}
                </label>
            </div>
        );
    }
}

export default Todo;