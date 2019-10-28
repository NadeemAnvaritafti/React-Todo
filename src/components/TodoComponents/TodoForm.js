import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newItem: ''
        };
    }

    changeHandler = e => {
        this.setState({
            newItem: e.target.value
        });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addNewToDo(this.state.newItem);
        this.setState({
            newItem: ''
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='item' placeholder='What do you need to do?' value={this.state.newItem} onChange={this.changeHandler}></input>
                    <div className='buttonDiv'>
                        <button className='button' type='submit'>Add to List</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;