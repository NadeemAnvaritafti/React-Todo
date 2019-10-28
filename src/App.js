import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: []
    };
  }

  addNewToDo = whatYouTyped => {
    const newItem = {
      task: whatYouTyped,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      }) 
    })
  }

  filterCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.completed === false
      })
    })
  }
  
  render() {
    return (
      <div className='App'>
        <div className='formHeader'>
          <h2>My To-Do List</h2>
          <TodoForm addNewToDo={this.addNewToDo}  />
        </div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} filterCompleted={this.filterCompleted} />
      </div>
    );
  }
}

export default App;
