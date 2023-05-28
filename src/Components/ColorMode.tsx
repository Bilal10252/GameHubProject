import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorMode = () => {
    let {toggleColorMode, colorMode} = useColorMode();
  return (
    <div>
      <HStack>
        <Switch isChecked={colorMode==="dark"} onChange={toggleColorMode}></Switch>
        {colorMode==="dark" ? <Text whiteSpace={"nowrap"}>Dark Mode</Text> : <Text>Light Mode</Text>}
      </HStack>
    </div>
  )
}

export default ColorMode
