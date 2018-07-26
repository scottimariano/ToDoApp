import axios from 'axios';
import loadingOn from './loadingOn';
import loadingOff from './loadingOff';

export default function setToDos() {
    return dispatch => {
        dispatch(loadingOn())
        axios.get('http://localhost:3000/toDos')
            .then(res => {
                const toDos = res.data
                dispatch(getToDosAsync(toDos));
                dispatch(loadingOff())
            });
    }
};

function getToDosAsync(toDos) {
    return {
        type: 'SET_TODOS',
        toDos
    };
}