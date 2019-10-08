import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import TodoForm from './TodoForm';
import Todo from './Todo';

library.add(faTrash, faPlus);

const testData = [
  { id: 1, task: "Walk dog", complete: false },
  { id: 2, task: "Study React", complete: false }
];

const TodoList = (props) => (
  <div className="container-fluid py-3">
    <h2>My List</h2>
    <div className="col-md-auto list-group">
      {props.todoTasks.map(todoTask => <Todo {...todoTask} key={todoTask.id} />)}
    </div>
  </div>
);

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todoTasks: testData,
  //   };

  // This is a shorter way of doing the same as above
  state = {
    todoTasks: testData,
  };

  render() {
    return (
      <div className="container-fluid">
        <h1>My To Do List</h1>
        <TodoForm />
        <TodoList todoTasks={this.state.todoTasks} />
      </div>
    )
  }
}

export default App;
