import React from 'react';
import './App.css';
import { fetchTodos, postTodo, toggleComplete, deleteTodo} from './api'
import Todos from './Components/Todos';
import {} from './api'
class App extends React.Component {
  state = {
    todos : [],
    todo : ''
  }

    
   handleChange = (event) => {
      this.setState({todo: event.target.value});
  }
  
   handleSubmit = async (event) => {
      event.preventDefault();
      const response = await postTodo(this.state.todo)
      const fetchedTodos = await fetchTodos()
      this.setState({todos : fetchedTodos, todo : ''})
      console.log(response)

  }

  toggleDone = async (id, done) => {
    const response =  await toggleComplete(id)
    const fetchedTodos = await fetchTodos()
    this.setState({todos : fetchedTodos})
    console.log(response)

  }

  handleDelete = async (id) => {
    const response = await deleteTodo(id)
    const fetchedTodos = await fetchTodos()
    this.setState({todos : fetchedTodos})
    console.log(response)
  }

  async componentDidMount(){
    const fetchedTodos = await fetchTodos()
    this.setState({todos : fetchedTodos})
  }



  render(){
    const { todos } = this.state
    return (
      <div className="App">
      <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">My Todo list</h4>
                        <div className="add-items d-flex"> <input value={this.state.todo} onChange={this.handleChange} type="text" className="form-control todo-list-input" placeholder="What do you need to do today?"/> <button onClick={this.handleSubmit} className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> </div>

                        <Todos todos={todos} handleDelete={this.handleDelete} toggleDone={this.toggleDone}/>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</div>
    );
  }
  
}

export default App;
