import React from 'react'
import ToDo from './Todo'

const TodoList = props => {
    return (
        <div className='todo-list' >
            {props.list.map(item => (
                <ToDo item={item} />
            ))}
        </div>
    )
}
export default TodoList