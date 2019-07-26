
    export function countReducer(state, action) {
        switch (action.type) {
        case 'SET_COUNT':
        return { ...state, id: action.payload }
        default:
        return state
        }
    }
    