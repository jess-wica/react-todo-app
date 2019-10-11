import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import shortid from 'shortid';

export class TodoForm extends Component {
    state = {
        newItemText: ''
    }

    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value });
    }

    createNewToDo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({
            newItemText: ''
        });
    }

    render = () =>
        <div className="my-1">
            <input type="text"
                className="form-control"
                value={this.state.newItemText}
                onChange={this.updateNewTextValue}
                placeholder="Enter a task..."
                required />
            <button className="btn btn-primary"
                onClick={this.createNewToDo}>
                <FontAwesomeIcon icon="plus" />
            </button>
        </div>
}