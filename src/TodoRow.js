import React, { Component } from 'react';

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
                    onChange={() => this.toggleTodo(this.props.todo)}
                />
                {this.props.todo.task}
            </td>
        </tr>
}