import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shortid from 'shortid';

// import TodoForm from './TodoForm';
// import Todo from './Todo';

library.add(faTrash, faPlus);

// const TodoList = (props) => (
//   <div className="container-fluid py-3">
//     <h2>My List</h2>
//     <div className="col-md-auto list-group">
//       {props.todoTasks.map(todoTask =>
//         <Todo
//           key={todoTask.id}
//           {...todoTask}
//           onToggleChecked={() => props.onToggleChecked}
//           onDeleteClick={() => props.onDeleteClick}
//         />)}
//     </div>
//   </div>
// );

export default class App extends Component {
  state = {
    userName: 'Jess',
    todoTasks: [{ id: 1, task: "Learn React", complete: false },
    { id: 2, task: "Take over the world", complete: false },
    { id: 3, task: "Fire Mark Zuckerberg", complete: false }],
    newItemText: ""
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }

  createNewToDo = (todo) => {
    this.setState({
      todoTasks: [todo, ...this.state.todoTasks,
        {
          id: shortid.generate(),
          task: this.state.newItemText,
          complete: false
        }]
    })
  }

  todoRows = () => this.state.todoTasks.map(todo =>
    <tr key={todo.id}>
      <td>
        <input className="mr-1" type="checkbox" />
        {todo.task}
      </td>
    </tr>);

  render = () =>
    <div>
      <h4 className="p-2 text-center">{this.state.userName}'s To Do List</h4>

      <div className="container-fluid">
        <div className="my-1">
          <input type="text"
            className="form-control"
            value={this.state.newItemText}
            onChange={this.updateNewTextValue}
            placeholder="Enter a task..."
            required />
          <button
            onClick={this.createNewToDo}
            className="btn btn-primary">
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr><th>Outstanding Tasks</th></tr>
          </thead>
          <tbody>
            {this.todoRows()}
          </tbody>
        </table>
      </div>
    </div>
}

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     todoTasks: testData,
//   //   };

//   // This is a shorter way of doing the same as above
//   // state = {
//   //   todoTasks: [],
//   // };

//   toggleChecked = (id) => {
//     this.setState(state => ({
//       todoTasks: state.todoTasks.map(todoTask => {
//         if (todoTask.id === id) {
//           return {
//             ...todoTask,
//             complete: !todoTask.complete
//           };
//         } else {
//           return todoTask;
//         }
//       })
//     }));
//   };

//   deleteToDo = (id) => {
//     // this.setState({
//     //   todoTasks: this.state.todoTasks.filter(todoTask => todoTask.id !== id)
//     // });
//     console.log("It's been clicked!!!");
//     console.log(id);
//     const todoTasks = this.state.todoTasks.filter(todo => {
//       return todo.id !== id
//     });
//     console.log(todoTasks);
//     this.setState({ todoTasks: todoTasks });
//     console.log(todoTasks.length);
//   }

//   render() {
//     const haveTodos = (this.state.todoTasks === undefined || this.state.todoTasks < 1);
//     return (
//       <div className="container-fluid">
//         <h1>My To Do List</h1>
//         <TodoForm onSubmit={this.addNewTodo} />
//         {haveTodos ?
//           <p>Add something to do!</p> :
//           <TodoList
//             todoTasks={this.state.todoTasks}
//             onToggleChecked={() => this.toggleChecked}
//             onDeleteClick={() => this.deleteToDo}
//           />}
//       </div>
//     )
//   }
// }
