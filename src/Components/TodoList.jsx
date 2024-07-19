import React,{ useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Form from './Form';
import Todo from './Todo';
import EditTask from './EditTask';
uuidv4();

const TodoList = ({}) => {
  const[todos, setTodos] = useState([]);
  const addTodo = todo => {
    setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}]);
  }
  const handleDelete = id=> {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const editTodo = id => {
    setTodos(todos.map(todo=> todo.id === id ? {...todo, isEditing : !todo.isEditing}:todo))
  }
  return (
    <> 
    <div className='flex justify-center'>
    <div className='container text-center w-96 bg-rose-500 my-10 mx-10 p-10 rounded-md'>
      <h1 className='text-align font-bold mb-3 underline text-2xl'>My Todo List</h1>
    <Form  addTodo={addTodo}/>
    {todos.map((todo, index)=> (
      todo.isEditing ?(
        <EditTask/>
      ):(
       <Todo task = {todo} key ={index} handleDelete ={handleDelete} editTodo={editTodo} />
      )
    ))}  
    </div>
    </div>
    </>
  )
}

export default TodoList
