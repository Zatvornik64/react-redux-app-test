import { createStore } from 'redux'
import { rootReduser, initialStore } from '../reducers'

export const store = createStore (rootReducer, initialState)