import { lightTheme, darkTheme } from '../theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from "styled-normalize"
import React from 'react'
import { useGlobalStateContext } from '../context/globalContext'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
  body {
    font-size: 16px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.bg.primary};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

export default function Provider({ children }) {
  const [mounted, setMounted] = React.useState(false)
  const { currentTheme } = useGlobalStateContext()
  const theme = currentTheme === "dark" ? darkTheme : lightTheme

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const body =
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>

  if (!mounted) {
    return <div style={{ visibility: 'hidden'}}>{body}</div>
  }

  return body
}