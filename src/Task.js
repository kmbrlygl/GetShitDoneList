import React, { Component } from 'react'; 

class Task extends Component {
    constructor() {
        super ();
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleClick() {
        this.props.completeTask(this.props.index)
    }
    handleDelete() {
        this.props.removeTask(this.props.index);
    }

    render() {
        return (
            <div>
            {this.props.task.complete ? <span className='complete'> {this.props.task.taskName} <span><input onClick={this.handleClick} checked type='checkbox'/><a onClick={this.handleDelete} href="#">Remove</a></span></span> : 
            <span>{this.props.task.taskName} <span><input onClick={this.handleClick} type='checkbox'/><a onClick={this.handleDelete} href="#">Remove</a></span></span>
            
            }
            </div>
        )
    }
}

export default Task;