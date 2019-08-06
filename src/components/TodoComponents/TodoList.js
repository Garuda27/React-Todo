import React from 'react'
import ToDo from './Todo'

const TodoList = props => {
    return (
        <div className='todo-list' >
            {props.list.length > 1 ?
                <p>Click on the tasks to mark complete.</p>
                : <p>Start by adding your tasks with the form below.</p>
            }
            {props.list.map(item => (
                <ToDo item={item} key = {item.id} toggleItem = {props.toggleItem} />
            ))}
        </div>
    )
}
export default TodoList