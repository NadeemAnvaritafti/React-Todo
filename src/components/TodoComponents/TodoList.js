import React from 'react';
import Todo from './Todo';
import './Todo.css';

class TodoList extends React.Component {

    render() {
        return (
            <div className='todolist'>
                <div className='todoitems'>
                    {this.props.todos.map(item => (
                    <Todo key={item.id} todoItem={item} toggleCompleted={this.props.toggleCompleted} />
                    ))}
                </div>
                <div className='todobutton'>
                    <button className='button' type='submit' onClick={() => this.props.filterCompleted()}>Clear Completed</button>
                </div>
            </div>
        )
    }
}

export default TodoList;