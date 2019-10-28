import React from 'react';
import './Todo.css';


class Todo extends React.Component {

    render() {
        return (
            <div className={`item${this.props.todoItem.completed ? ' completed' : ''}`} onClick={() => this.props.toggleCompleted(this.props.todoItem.id)}>
                <p>{this.props.todoItem.task}</p>
            </div>
        )
    }
}

export default Todo;