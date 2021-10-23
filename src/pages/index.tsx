import { Box } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'
import React from 'react'

export default function Home() {
  return (
    <Box>
      <chakra.h1 color="tomato">Hello Chakra!</chakra.h1>
    </Box>
    // <h1>Hello Jest!</h1>
  )
}
