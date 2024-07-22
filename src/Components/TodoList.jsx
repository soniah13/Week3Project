import React,{ useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Form from './Form';
import Todo from './Todo';
import EditTask from './EditTask';
uuidv4();

const TodoList = ({}) => {
  const[todos, setTodos] = useState([]);
  const[searchTask, setSearchTask] = useState("");
  const addTodo = todo => {
    setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}]);
  }
  const handleDelete = id=> {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const editTodo = id => {
    setTodos(todos.map(todo=> todo.id === id ? {...todo, isEditing : !todo.isEditing}:todo))
  }
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ?{...todo, completed: !todo.completed} :todo))
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? {...todo, task, isEditing: ! todo.isEditing} : todo))
    );
  }

  const handleSearch = (event) => {
    setSearchTask(event.target.value);
  }
  return (
    <> 
    <div className='flex justify-center'>
    <div className='container text-center w-96 bg-rose-500 my-10 mx-10 p-10 rounded-md'>
      <h1 className='text-align font-bold mb-3 underline text-2xl'>My Todo List</h1>
      <div className='flex py-2 px-2 bg-slate-200 my-5'>
        <button onClick={handleSearch} className='border outline-none border-solid border-2 px-2'>search task</button>
        <input className='bg-black text-white ' type='text' placeholder='search your task' value={searchTask} onChange={handleSearch}/>
      </div>
    <Form  addTodo={addTodo}/>
    {todos.filter((todo) => todo.task.toLowerCase().includes(searchTask.toLowerCase())
  )
    .map((todo, index)=> (
      todo.isEditing ?(
        <EditTask editTodo={editTask} task={todo}/>
      ):(
       <Todo task = {todo} key ={index} handleDelete ={handleDelete} editTodo={editTodo} toggleComplete={toggleComplete} />
      )
    ))}  
    </div>
    </div>
    </>
  )
}

export default TodoList
