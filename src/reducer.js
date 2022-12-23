export const funcReducer =(state,action)=>{
    switch(action.type){
        case 'avelacnel':
            return [
                ...state,{id:Date.now(),
                    task:action.payload.task,
                    checked:false,
                }
            ]
        case 'jnjel':
            return state.filter((item)=>item.id!==action.payload)

        case 'stugel':
            return state.map((item)=> item.id===action.payload ? {...item,checked:!item.checked} : item)

        case 'popoxel':
            return state.map((item)=>item.id === action.payload.id ? {...item, edit:!item.edit } :item )

        case 'save' :  
        console.log(action.payload.task); 
        return state.map((item)=>item.id === action.payload.id ? {...item, task:action.payload.task, edit:false} :item )

         case 'clear':
              return []

    }

}