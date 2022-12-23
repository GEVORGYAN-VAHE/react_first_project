import React from 'react'
import TodoItem from './TodoItem'



export default function TodoList({todo}) {
    console.log(todo);
  return (
    <div>
        {
            todo.map((item)=><TodoItem key={item.id} {...item}/>)

        }

    </div>
  )
}
