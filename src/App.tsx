import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import Greetings from './components/Greetings'

const App: React.FC = () => {
  console.log('Hello')

  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  )
}

export default App
