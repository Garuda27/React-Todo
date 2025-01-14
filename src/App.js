import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm'
import { Card } from 'semantic-ui-react'
import TodoList from './components/TodoComponents/TodoList'
// import taskItem from './components/TodoComponents/TodoForm'

const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task : '',
    id : null,
    completed : false
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      list: toDoList
    }
  }
  addTask = taskName => {
    const newTask = { task: taskName, id: Date.now(), completed: false };

    this.setState({
      list: [...this.state.list, newTask]
    });
  }

  toggleItem = id => {

    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        } else {
          return item;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }

  render() {
    return (
      // <div>
      //   <h2>Welcome to your Todo App!</h2>
      <Card className='to-do-list'>
        <Card.Content className='header-container'>
          <Card.Header>Welcome to your Todo App!</Card.Header>
        </Card.Content>
        <Card.Content className='items'>
          <TodoList
            list={this.state.list}
            toggleItem={this.toggleItem}
          />
          <ToDoForm
            addTask={this.addTask}
            clearCompleted={this.clearCompleted}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default App;
