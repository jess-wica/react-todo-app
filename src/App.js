import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './TodoForm';
import Todo from './Todo';

// const testData = [
//   { task: "Walk dog", complete: false },
//   { task: "Study React", complete: false }
// ];

const TodoList = (props) => (
  <div>
    <h1>My List</h1>
    <ul>
      <Todo />
    </ul>
  </div>
);
class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default App;
