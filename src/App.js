import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import shortid from 'shortid';

import { TodoForm } from './TodoForm';
import { TodoRow } from './TodoRow';

library.add(faTrash, faPlus);

export default class App extends Component {
  state = {
    userName: 'Jess',
    todoTasks: [{ id: 1, task: "Learn React", complete: false },
    { id: 2, task: "Take over the world", complete: false },
    { id: 3, task: "Fire Mark Zuckerberg", complete: false }]
  }

  createNewToDo = (task) => {
    this.setState({
      todoTasks: [...this.state.todoTasks,
      {
        id: shortid.generate(),
        task: task,
        complete: false
      }]
    });
  }

  toggleTodo = (todo) => this.setState({
    todoTasks: this.state.todoTasks.map(item => item.id === todo.id
      ? { ...item, complete: !item.complete } : item)
  });

  todoRows = () => this.state.todoTasks.map(todo =>
    <TodoRow key={todo.id} todo={todo} callback={this.toggleTodo} />);

  haveTodos = () =>
    this.state.todoTasks === undefined || this.state.todoTasks < 1;

  render = () =>
    <div>
      <h4 className="p-2 text-center">{this.state.userName}'s To Do List</h4>

      <div className="container-fluid">
        <TodoForm callback={this.createNewToDo} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr><th>Outstanding Tasks</th></tr>
          </thead>
          <tbody>{this.todoRows()}</tbody>
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
