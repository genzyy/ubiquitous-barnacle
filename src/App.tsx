import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './lib/theme'
import Greetings from './components/Greetings'

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Greetings />
    </ChakraProvider>
  )
}

export default App
