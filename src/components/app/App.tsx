import { FC } from 'react'
import styled from 'styled-components'
import Header from '../header/Header'
import Todo from '../todo/Todo'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  display: grid;
  grid-template-areas:
  'header'
  'content';
  width: 1440px;
`
const Content = styled.div`
  grid-area: content;
  background: darkgray;
  min-height: 700px;
`

const App: FC = () => (
   <AppWrapper>
     <Container>
       <Header />
       <Content>
         <Todo />
       </Content>
     </Container>
   </AppWrapper>
  )

export default App
