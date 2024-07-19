import React from 'react'

const Todo= ({task, handleDelete, editTodo}) => {

  return (
    <>
    <div className='flex justify-between border border-2 border-solid bg-rose-200 m-2 text-l font-semibold pl-2'>
        <p> {task.task} </p>
        <div className='flex gap-2 font-semibold uppercase'>
        <button onClick={()=> editTodo (task.id)}>Edit</button>
        <button onClick={()=> handleDelete (task.id)}>Delete</button>
        </div>
        </div>
    </>
  )
}

export default Todo