import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
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

const App = (): JSX.Element => (
   <AppWrapper>
     <Container>
       <Navbar />
       <Content>
         <Todo />
       </Content>
     </Container>
   </AppWrapper>
  )

export default App
