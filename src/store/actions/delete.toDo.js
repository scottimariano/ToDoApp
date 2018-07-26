import axios from 'axios';
import loadingOn from './loadingOn'
import loadingOff from './loadingOff'

export default function deleteToDo(id) {
    return dispatch => {
        dispatch(loadingOn())
        axios.delete(`http://localhost:3000/toDos/${id}`)
            .then(res => {
                dispatch(deleteTodoAsync(id));
                dispatch(loadingOff())
            });
    }
};

function deleteTodoAsync(id) {
    return {
        type: 'DELETE_TODO',
        id
    };
};