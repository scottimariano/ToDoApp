import axios from 'axios';

export default function deleteToDo(id) {
    return dispatch => {
        axios.delete(`http://localhost:3000/toDos/${id}`)
            .then(res => {
                dispatch(deleteTodoAsync(id));
            });
    }
};

function deleteTodoAsync(id) {
    return {
        type: 'DELETE_TODO',
        id
    };
};