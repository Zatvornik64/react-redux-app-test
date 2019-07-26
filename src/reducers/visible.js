


export function visibleReducer(state, action) {
    switch (action.type) {
    case 'SET_VISIBLE':
    return { ...state, id: action.payload }
    default:
    return state
    }
}