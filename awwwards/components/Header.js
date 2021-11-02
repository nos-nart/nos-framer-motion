import React from 'react';
import Link from 'next/link';
import { useGlobalDispatchContext, useGlobalStateContext } from '../context/globalContext';
import { HeaderNav, Logo, Menu } from './Header.styled';
import { Container, Flex } from './Global.styled';

export default function Header() {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  
  const hamburgerRef = React.useRef(null)

  React.useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link href="/">FURR</Link>
            <span />
            <Link href="/">W</Link>
          </Logo>
          <Menu
            ref={hamburgerRef}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}