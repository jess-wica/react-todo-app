import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = (props) => {
    const todoTask = props;
    console.log(props.onToggleChecked);
    return (
        <div className="row list-group-item">
            <div className="col-9">
                <div className="col-8">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={todoTask.complete}
                        onChange={props.onToggleChecked(todoTask.id)}
                    />
                    <label
                        style={{
                            textDecoration: todoTask.complete ? 'line-through' : ''
                        }}>
                        {todoTask.task}
                    </label>
                </div>
                <div className="col-1">
                    <button
                        onClick={() => props.onDeleteClick(todoTask.id)}
                        className="rounded"
                    >
                        <FontAwesomeIcon icon="trash" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;