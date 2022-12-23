import React from 'react'
import Context from '../context'
import {useContext, useState} from 'react'
export default function TodoItem({id,task,checked,edit}) {
    // console.log(props);

    const [value,setValue]= useState(task)
    const {dispatch}=useContext(Context)
  return (
    <div>
<input onChange={()=>dispatch({type:'stugel', payload:id})} type='checkbox' checked={checked}/>

<input onChange={(e)=>setValue(e.target.value)} type='text' value={value} readOnly={edit ? false : true}/>

<button  onClick={()=>dispatch({type:'jnjel' ,payload:id })}>
    Delete
</button>

<button onClick={()=>dispatch({type:'popoxel', payload:{id:id, }})} > POPOXEL </button>

<button onClick={()=>dispatch({type:'save', payload:{id:id,task:value }})} > SAVE </button>

    </div>
  )
}
