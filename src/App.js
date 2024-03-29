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

  deleteToDo = (id) => {
    this.setState({
      todoTasks: this.state.todoTasks.filter(todoTask => todoTask.id !== id)
    });
  }

  todoRows = () => this.state.todoTasks.map(todo =>
    <TodoRow key={todo.id} todo={todo} callback={this.toggleTodo} onDeleteClick={this.deleteToDo} />);

  haveTodos = () =>
    this.state.todoTasks === undefined || this.state.todoTasks < 1;

  render = () =>
    <div>
      <h4 className="p-2 text-center">{this.state.userName}'s To Do List</h4>

      <div className="container-fluid">
        <TodoForm callback={this.createNewToDo} />
        <table className="table table-striped table-bordered">
          <thead className="text-center">
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