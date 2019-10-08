import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './TodoForm';
import Todo from './Todo';

const testData = [
  { task: "Walk dog", complete: false },
  { task: "Study React", complete: false }
];

const TodoList = (props) => (
  <div>
    <h2>My List</h2>
    <ul>
      {testData.map(todoTask => <Todo {...todoTask} />)}
    </ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My To Do List</h1>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default App;
