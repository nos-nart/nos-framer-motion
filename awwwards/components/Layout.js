import React from 'react';
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext';
import CustomCursor from './customCursor';

export default function Layout({ children }) {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const [hamburgerPosition, setHamburgerPosition] = useState({ x: 0, y: 0 })

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <>
      <CustomCursor toggleMenu={toggleMenu} />
      {children}
    </>
  )
}
