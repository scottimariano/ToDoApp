import axios from 'axios'

export default function AddToDo (toDo) {
  return dispatch => {
    axios
      .post('http://localhost:3000/toDos', {
        title: toDo.title,
        description: toDo.description
      })
      .then(() => {
        dispatch(addToDoAsync(toDo))
      })
  }
}

function addToDoAsync (toDo) {
  return {
    type: 'ADD_TODO',
    toDo
  }
}
