import React from 'react'

const Todo=({text , todo , todos , setTodos})=>{
    const completeHandler=()=>{
        setTodos(
            todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item,
                    completed: !item.completed,
                };
               
            }
            return item;
        })
        );
    }
    return(
<div className="todo">
    <li className={`todo-item ${todo.completed ? "completed" : ''}`} >{text}
{text}
    </li>
    <button onClick={completeHandler} className="complete-btn">
        <i className='fas fa-check'>

        </i>
    </button>
  
</div>
    );
}

export default Todo
