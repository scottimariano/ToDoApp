
const initialState = {
    toDos: [],
    username: '',
    gotUser: false
};

export default function toDosReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                toDos: action.toDos
            }

        case 'DELETE_TODO':
            return {
                ...state,
                toDos: state.toDos.filter(toDo => toDo.id !== action.id),
            }

        case 'ADD_TODO':
            return {
                ...state,
                toDos: [...state.toDos, action.toDo]
            }

        case 'USER_LOGIN':
            return {
                ...state,
                username: action.username,
            }

        case 'USER_LOGOUT':
            return {
                ...state,
                username: '',
            }

        default:
            return state
    }
}

