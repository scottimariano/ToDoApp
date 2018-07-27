import axios from 'axios'
import loadingOn from './loadingOn'
import loadingOff from './loadingOff'

export default function AddToDo (toDo,toDos) {
  return dispatch => {
    dispatch(loadingOn())
    // let ids = toDos.map((todo) =>{
    //   return todo.id
    // })
    // let newId = Math.max(...ids) + 1;
    
    axios
      .post('http://localhost:3000/toDos', {
        title: toDo.title,
        description: toDo.description,
        // id: newId
      })
      .then(() => {
        dispatch(addToDoAsync(toDo));
        dispatch(loadingOff())
      })
  }
}

function addToDoAsync (toDo) {
  return {
    type: 'ADD_TODO',
    toDo
  }
}
