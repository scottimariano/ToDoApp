import axios from 'axios'
import loadingOn from './loadingOn'
import loadingOff from './loadingOff'

export default function AddToDo (toDo) {
  return dispatch => {
    dispatch(loadingOn())
    axios
      .post('http://localhost:3000/toDos', {
        title: toDo.title,
        description: toDo.description
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
