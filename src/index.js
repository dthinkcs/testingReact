import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={styles}>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { text: "Do Python Web Dev", completed: false },
        { text: "Do Javascript React, Native", completed: false }
      ]
    };
  }

  addTodo() {
    const text = prompt("Add a TODO");
    this.setState({ todos: [...this.state.todos, { text: text, completed: false }] });
  }


  render() {
    return (
      <div>
        <h3>{this.state.todos.map(todo => <p>{todo.text}</p>)}</h3>
        <button onClick={() => this.addTodo()}>Add</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <Counter />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
