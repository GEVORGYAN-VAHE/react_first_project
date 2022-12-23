// import logo from './logo.svg';
import './App.css';
import TodoList from './TODO/TodoList';
import { useReducer,useState, useContext, useEffect } from 'react';
import { funcReducer } from './reducer';
import Context from './context';



function App() {
 
 const[todoTask,setTodoTask]=useState('')
  const [todo, dispatch]=useReducer(funcReducer,(JSON.parse(localStorage.getItem("todos")) || [] ))

  useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todo))

  // 1-inov yndunum e key-n
  // 2-rd ov yndunum e toxayin tip dardzrac arjeqy(json.str...)

  },[todo])
  const addFunc=()=>{
    if(todoTask){
      dispatch({type:'avelacnel',payload:{task:todoTask}})
    }
    setTodoTask("")

  }

  return (
   <div className='divPar'>
    <div>
      <input onChange={(event)=>setTodoTask(event.target.value)} className='inpChange' value ={todoTask} type ="text"/>
      <button onClick={addFunc} className='btnChange'> ADD </button>
    </div>
    <Context.Provider value={{dispatch}}>
      <TodoList todo={todo}  />
      
    </Context.Provider>
   <div>
   <span>
    {
      todo.length
    }
   </span>/
    <span>
      {
      todo.filter((el)=>el.checked).length
      }
    </span>
   </div>
   <button onClick={()=>dispatch({type:'clear',})}>
    Clear
    </button>  

   </div>
  );
}

export default App;
