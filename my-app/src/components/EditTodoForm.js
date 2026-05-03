
import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

  const [value, setValue] = useState(task.task);


  const handleSubmit = e =>{
    e.preventDefault();

    const trimmed = value.trim();

    // EMPTY → just close edit mode
    if (trimmed === "") {
      editTodo(task.task, task.id); // revert original + exit edit
      return;
    }

    // SAME VALUE → just exit edit mode
    if (trimmed === task.task) {
      editTodo(task.task, task.id);
      return;
    }

    // VALID CHANGE
    editTodo(trimmed, task.id);

    // if (value.trim() === "") {
    //   setValue(task.task); // revert to original
    //   return;
    // }

    // editTodo(value, task.id);


    //setValue('');
  };


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" className='todo-input' value={value} placeholder="Edit if needed buddy"
    onChange={(e)=> setValue(e.target.value) } />
    <button type='submit' className='todo-btn' >Edit Task</button>
    </form>
  )
}
