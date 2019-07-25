import { combineReducers } from 'redux'
import { countReducer } from './counter'
import { visibleReducer } from './visible'

export const rootReducer = combineReducers({
  items: countReducer,
  visible: visibleReducer,
})





export function rootReducer (sate = initialState) {
    return state
}