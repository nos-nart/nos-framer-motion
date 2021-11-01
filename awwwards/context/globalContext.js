import React from 'react';

const GlobalStateContext = React.createContext()
const GlobalDispatchContext = React.createContext()

const ACTION_TYPE = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  CURSOR_TYPE: 'CURSOR_TYPE',
}

const globalReducer = (state, action) => {
  switch(action.type) {
    case ACTION_TYPE.TOGGLE_THEME: {
      return {...state, currentTheme: action.theme }
    }
    case ACTION_TYPE.CURSOR_TYPE: {
      return { ...state, cursorType: action.cursorType }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function getTheme() {
  if (window !== undefined) {
    return window.localStorage.getItem('theme') === null
      ? 'dark'
      : window.localStorage.getItem('theme')
  }
  return 'dark'
}

export const GlobalProvider = ({ children }) => {
  const initialState = {
    currentTheme: getTheme(),
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked", "white"],
  }
  const [state, dispatch] = React.useReducer(globalReducer, initialState)

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
