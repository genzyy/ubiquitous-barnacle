import React from 'react'
import Button from '../Button'
import { Box, Container } from '@chakra-ui/react'

const Greetings: React.FC = () => {
  const handleSayHello = () => {
    window.Main.sendMessage('Hello World!')

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Box>
      <Container>
        <Button onClick={handleSayHello}>Click me</Button>
      </Container>
    </Box>
  )
}

export default Greetings
