import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todo extends Component {
    render() {
        const todoTask = this.props;
        return (
            <div className="row list-group-item">
                <div className="col-9">
                    <div className="col-8">
                        <input className="form-check-input" type="checkbox" />
                        <label
                            style={{ textDecoration: todoTask.complete ? "line-through" : "" }}
                        >
                            {todoTask.task}
                        </label>
                    </div>
                    <div className="col-1">
                        <button className="rounded">
                            <FontAwesomeIcon icon="trash" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;