import React, {useState} from "react";
import Task from './TodoList';

    const EditTask = ({editTodo, task}) => {
        const [value, setValue] = useState("");
        const handleSubmit = e => {
            e.preventDefault();
            editTodo(value,task.id)
            setValue("")
        }
  return (
    <>
    <form className="" onSubmit = {handleSubmit}>
    <input type="text" value={value} className="outline-none border border-gray-300 p-2" placeholder="Change Task?" 
    onChange={(e) => setValue(e.target.value)}></input>
    <button type="submit" className="cursor-pointer border border-gray-300 p-2 bg-gray-200 font-bold hover:bg-rose-100">Edit Task</button>
    </form>
    </>
  )
}

export default EditTask;