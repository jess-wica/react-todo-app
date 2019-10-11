import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class TodoRow extends Component {
    render = () =>
        <tr>
            <td style={{
                textDecoration:
                    this.props.todo.complete ? 'line-through' : ''
            }}>
                <input className="mr-1"
                    type="checkbox"
                    checked={this.props.todo.complete}
                    onChange={() => this.props.callback(this.props.todo)}
                />
                {this.props.todo.task}
                <button className="btn btn-primary mr-1 float-right"
                    onClick={() => this.props.onDeleteClick(this.props.todo.id)}
                >
                    <FontAwesomeIcon icon="trash" />
                </button>
            </td>
        </tr>
}