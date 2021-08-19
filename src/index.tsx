import ReactDOM from 'react-dom'
import App from './components/app/App'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`

const theme = {
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 992px)',
    desktop: '(max-width: 1200px)'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>, document.getElementById('root')
)