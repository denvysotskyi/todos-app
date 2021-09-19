import styled from 'styled-components'
import { FC } from 'react'
import logo from '../../assets/images/logo.png'

const HeaderWrapper = styled.div`
  grid-area: header;
  height: 55px;
  background: red;
  display: flex;
  align-items: center;
`
const LogoWrapper = styled.div`
  margin: 2px 0 0 47px;
`
const Logo = styled.img`
  width: 42px;
  height: 42px;
`

const Navbar: FC = () => (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo}
              alt={'logo'}
        />
      </LogoWrapper>
    </HeaderWrapper>
  )

export default Navbar