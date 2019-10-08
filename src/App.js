import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import TodoForm from './TodoForm';
import Todo from './Todo';

library.add(faTrash, faPlus);

const testData = [
  { task: "Walk dog", complete: false },
  { task: "Study React", complete: false }
];

const TodoList = (props) => (
  <div>
    <h2>My List</h2>
    <div className="col-md-auto list-group">
      {testData.map(todoTask => <Todo {...todoTask} />)}
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>My To Do List</h1>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default App;
