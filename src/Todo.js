import React, { Component } from 'react';

const testData = [
    { task: "Walk dog", complete: false },
    { task: "Study React", complete: false }
];

class Todo extends Component {
    render() {
        const todoTask = testData[0];
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