import React from "react";
import { Button, Form } from "semantic-ui-react";

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskItem: ''
        };
        this.baseState = this.state.taskItem;
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitItem = e => {
        e.preventDefault()
        const taskItem = this.state.taskItem
        this.props.addTask(this.state.taskItem)
        this.setState({
            taskItem: ''
        })
    }
    clearCompleted = event => {
        event.preventDefault()
        this.props.clearCompleted()
        console.log(this.state)
    }

    clearCompleted = event => {
        event.preventDefault()
        this.props.clearCompleted()
        this.setState({
            taskItem: ''
        })

        console.log(this.state.taskItem)
        
    }
    render() {
        return (
            <Form onSubmit={this.submitItem}>
                <Form.Field>
                    <label>Add Task</label>
                    <input
                        placeholder="Task Description"
                        value={this.state.taskItem}
                        name='taskItem'
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button type="submit">Submit</Button>
                <Button type="button" onClick={this.clearCompleted} className='remove-btn'>Clear Completed</Button>
            </Form>
        );
    }
};
export default ToDoForm;