import { combineReducers } from 'redux'
import { countReducer } from './counter'
import { visibleReducer } from './visible'

export const rootReducer = combineReducers({
  items: countReducer,
  visible: visibleReducer,
})


export const initialState = {
  visible: {
      list: true,
      card: true,
    },
  items: [
  {
    id: 0,
    name: `Item 1`,
    price: 890,
    count: 0
  },
  {
    id: 1,
    name: `Item 2`,
    price: 20,
    count: 3
  },
  {
    id: 2,
    name: `Item 3`,
    price: 428,
    count: 0
  },
  {
    id: 3,
    name: `Item 4`,
    price: 45,
    count: 23
  }
]
}

