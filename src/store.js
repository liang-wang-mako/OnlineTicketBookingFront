import { createContext, useReducer } from 'react'

export const Store = createContext()

const initialState = {
   screenId: 0
}

function reducer(state, action) {
 
  switch (action.type) {
    case 'UPDATE_SCREEN_ID':
      return { ...state, screenId: action.payload }
    default:
      return state
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
