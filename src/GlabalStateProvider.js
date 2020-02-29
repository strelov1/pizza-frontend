import React from 'react'

const StateContext = React.createContext({count: 0, flash: [], currency: "USD"})
const DispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'set': {
      return {count: action.count}
    }
    case 'addFlash': {
      return {flash: action.flash}
    }
    case 'switchCurrency': {
      return {currency: action.currency}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function StateProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, {count: 0, flash: [], currency: "USD"})
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useGlobalState() {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error('useState must be used within a StateProvider')
  }
  return context
}
function useGlobalDispatch() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useDispatch must be used within a StateProvider')
  }
  return context
}

export {StateProvider, useGlobalState, useGlobalDispatch}