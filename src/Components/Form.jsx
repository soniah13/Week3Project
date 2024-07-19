import React, {useState} from "react";
import Task from './TodoList';

    const Form = ({addTodo}) => {
        const [value, setValue] = useState("");
        const handleSubmit = e => {
            e.preventDefault();
            addTodo(value)
            setValue("")
        }
  return (
    <>
    <form className="" onSubmit = {handleSubmit}>
    <input type="text" value={value} className="outline-none border border-gray-300 p-2" placeholder="What do you want to do?" 
    onChange={(e) => setValue(e.target.value)}></input>
    <button type="submit" className="cursor-pointer border border-gray-300 p-2 bg-gray-200 font-bold hover:bg-rose-100">Add Task</button>
    </form>
    </>
  )
}

export default Form;