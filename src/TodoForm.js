import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import shortid from 'shortid';

export class TodoForm extends Component {
    state = {
        // id: '',
        newItemText: ''
    }

    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value });
    }

    createNewToDo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({
            // id: shortid.generate(),
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

// class TodoForm extends Component {
//     state = { taskInput: '' };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onSubmit({
//             id: shortid.generate(),
//             task: this.state.taskInput,
//             complete: false
//         });
//         this.setState({
//             taskInput: ''
//         });
//     }
//     render() {
//         return (
//             <div className="py-3">
//                 <form onSubmit={this.handleSubmit} >
//                     <input
//                         type="text"
//                         name="taskInput"
//                         className="rounded"
//                         value={this.state.taskInput}
//                         onChange={event => this.setState({ [event.target.name]: event.target.value })}
//                         placeholder="Enter task..."
//                         required />
//                     <button type="submit" className="rounded">
//                         <FontAwesomeIcon icon="plus" />
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default TodoForm;