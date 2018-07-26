import axios from 'axios';

export default function setToDos() {
    return dispatch => {
        axios.get('http://localhost:3000/toDos')
            .then(res => {
                const toDos = res.data
                dispatch(getToDosAsync(toDos));
            });
    }
};

function getToDosAsync(toDos) {
    return {
        type: 'SET_TODOS',
        toDos
    };
}