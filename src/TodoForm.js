import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TodoForm extends Component {
    render() {
        return (
            <form>
                <input type="text" className="rounded" placeholder="Enter task..." />
                <button type="submit" className="rounded">
                    <FontAwesomeIcon icon="plus" />
                </button>
            </form>
        );
    }
}

export default TodoForm;