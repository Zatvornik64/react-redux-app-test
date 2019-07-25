import { createStore } from ' redux '

export const initialState = {
    visible: {
        list: true,
        card: false,
      },
      
}
export function visibleReducer(state = initialState, action) {
    switch (action.type) {
    case 'SET_VISIBLE':
    return { ...state, id: action.payload }
    default:
    return state
    }
}