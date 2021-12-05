import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Greetings from './components/Greetings'

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Greetings />
    </ChakraProvider>
  )
}

export default App
